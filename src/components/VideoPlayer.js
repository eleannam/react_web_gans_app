import React from 'react';
import ReactPlayer from 'react-player';
import Rating from './Rating';
import useToken from './useToken';

function VideoPlayer() {
    const { token, setToken } = useToken();

    return (
        <div className='video-div'>
            <ReactPlayer
                //url={videoFilePath} 
                url='Videos/output.mp4'
                width="640px"
                height="360px"
                controls={true} />

            {token && (
                <div>
                    <Rating type='quality' />
                    <Rating type='relevance' />
                </div>)}
        </div>
    );
}

export default VideoPlayer;
