import React, { useEffect } from 'react';
import classes from './VideoFrame.module.scss';

const VideoFrame = (props) => {
    // useEffect(() => {
    //     console.log(props.url + "&autoplay=1");
    // }, [props.url]);

    return (
        <iframe width="1168" height="584" title={"Estabeb"} className={classes.VideoFrame}
            src={props.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default VideoFrame;
