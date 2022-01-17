import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from './Button';
import { BeatLoader } from 'react-spinners';

function Start() {

    const [videoFilePath, setVideoFilePath] = useState(null);
    const [outputFile, setOutputFile] = useState([]);
    const [outputFileName, setOutputFileName] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    
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
        console.log({videoFilePath})
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

    return (
        <div>
            <Button className='button' label='Test Video Maker' onClick={e => uploadFileNew(e)}/>

            {
                loading && <BeatLoader color='#1762A7' />
            }
            { show && <ReactPlayer 
                //url={videoFilePath} 
                url='Videos/output.mp4'
                width="500px" 
                height="400px" 
                controls={true} /> 
            }
        </div>
    )
}

export default Start
