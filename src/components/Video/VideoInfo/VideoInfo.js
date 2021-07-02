import React, { Fragment } from 'react';
import classes from './VideoInfo.module.scss';

const VideoInfo = (props) => {
    return (
        <Fragment>
            <h1 className={classes.VideoArea__Title}>{props.name}</h1>
            <div className={classes.VideoArea__details}>
                <p className={classes.VideoDetails__info}>{props.views}</p>
                <p className={classes.VideoArea__Likes}>{props.likes}</p>
            </div>
        </Fragment>
    )
}

export default VideoInfo;
