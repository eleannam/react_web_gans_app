import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { BeatLoader } from 'react-spinners';
import useVideo from './useVideo';
import VideoPlayer from './VideoPlayer';

function Start() {

    const [videoFilePath, setVideoFilePath] = useState(null);
    const [outputFile, setOutputFile] = useState([]);
    const [outputFileName, setOutputFileName] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputFile, setInputFile] = useState({ preview: '', data: '' })
    const [uploadStatus, setUploadStatus] = useState('');
    const { video, setVideo } = useVideo();
    const [showValidInputFileType, setShowValidInputFileType] = useState(false);

    /*     useEffect(() => {
            axios.get(`${baseURL}`).then((response) => {
                setPost(response.data);
            });
        }, []) */

    /*     useEffect(() => {
            fetch('/upload')
                .then(res => res.json())
                .then((outputFileName) => setOutputFileName(outputFileName));
        }, []) 
     */

    useEffect(() => {
        console.log('useEffect')
        console.log(video)
        if (video) {
            setShow(true);
        }
    })

    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };

    const fetchCallback = (respone) => {
        setOutputFileName(respone);
        setShow(true);
        //setVideoFilePath(URL.createObjectURL(outputFileName));
        console.log(show);
        console.log('fafda');
        console.log(outputFileName);
        console.log({ videoFilePath })
    }

    const uploadFile = (event) => {
        fetch('/upload')
            .then(res => res.json())
            //.then(outputFileName => setOutputFileName(outputFileName));
            .then(outputFileName => fetchCallback(outputFileName));
        //setVideoFilePath(URL.createObjectURL(outputFileName));

        // setShow(true);
    }

    const uploadFileNew = (event) => {
        event.preventDefault();

        setLoading(true);
        setShow(false);

        fetch('/upload')
            .then(res => res.json())
            .then(result => {
                setShow(result.success);
                setOutputFileName(result.fileName);
                //setVideoFilePath(URL.createObjectURL(result.fileName.toString()));
                console.log('ok');
                console.log(outputFileName);
                //console.log({videoFilePath});
                console.log(result);
                console.log(result.success);
                console.log(show);
                console.log(result.fileName);
                setLoading(false);
            });
    }

    const handleFileChange = (e) => {
        const inputFile = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setInputFile(inputFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (inputFile.data.type != 'audio/mpeg') {
            setShowValidInputFileType(true);
        } else {

            let formData = new FormData()
            formData.append('file', inputFile.data)

            sessionStorage.removeItem('video');
            setVideo();
            setLoading(true);
            setShow(false);
            setShowValidInputFileType(false);

            const response = await fetch('/inputFile', {
                method: 'POST',
                body: formData,
            }).then(res => res.json())
                .then(result => {
                    setShow(result.success);
                    //setOutputFileName(result.fileName);
                    //setVideoFilePath(URL.createObjectURL(result.fileName.toString()));
                    console.log('ok');
                    console.log(outputFileName);
                    //console.log({videoFilePath});
                    console.log(result);
                    console.log(result.success);
                    console.log(show);
                    //console.log(result.fileName);
                    setLoading(false);
                    setVideo(result);
                });
            //if (response) setUploadStatus(response.statusText)
        }
    }

    return (
        <div className='start-page-div'>
            {/* <Button className='button' label='Test Video Maker' onClick={e => uploadFileNew(e)} /> */}
            <h1 className='page-title'>Start</h1>
            <div>
                <form onSubmit={handleSubmit} className='upload-file-form'>
                    <label>Start with uploading a file...</label>
                    <input type='file'
                        name='file'
                        onChange={handleFileChange}
                        accept=".mp3"
                        class="upload-box" />

                    {showValidInputFileType && (
                        <p>Please select a valid audio file!</p>
                    )}
                    <button className="submit-button" type='submit'>Make Video</button>
                </form>
            </div>

            {uploadStatus && <h4>{uploadStatus}</h4>}

            {
                loading &&
                (<div className='loader-div'>
                    <BeatLoader color='#1762A7' />
                </div>)
            }

            {video &&
                show &&
                <VideoPlayer />
            }
        </div>
    )
}

export default Start
