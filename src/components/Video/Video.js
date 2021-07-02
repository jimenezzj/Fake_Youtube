import React, { useEffect, useState } from 'react'
import UrlHandler from '../../util/UrlHandler';
import Channel from './Channel/Channel';
import PlayList from './PlayList/PlayList';
import classes from './Video.module.scss';
import VideoFrame from './VideoFrame/VideoFrame';
import VideoInfo from './VideoInfo/VideoInfo';

const Video = (props) => {

    const urlHandler = UrlHandler();

    const [stateVideo, setStateVideo] = useState({
        description: "",
        id: 0,
        likes: 0,
        poster: "",
        title: "",
        url: "",
        poster: ""
    });

    useEffect(() => {
        // console.log(props);
        urlHandler.addEndPointVal("video");
        urlHandler.addParam("id", props.match.params.idVideo);
        fetch(urlHandler.getParsedURL(true, true))
            .then(res => res.json())
            .then(({ video, ...res }) => {
                if (res.status !== 200) {
                    const err = new Error(res.message);
                    throw err;
                }
                // console.log(res);
                setStateVideo({ ...video });
            })
            .catch(err => {
                console.log(err);
                console.error(err);
            });
        // return () => {
        //     cleanup
        // }
    }, []);

    return (
        <div className={classes.Video}>
            <div className={classes.VideoArea}>
                <VideoFrame url={stateVideo.url} />
                <VideoInfo likes={stateVideo.likes} views="4.001.949 views"
                    name={stateVideo.title} />
                <Channel name="Marques Brownlee" subs="1M" />
            </div>
            <div className={classes.VideosList}>
                <PlayList name="My Playlist" />
            </div>
        </div>
    )
}

export default Video
