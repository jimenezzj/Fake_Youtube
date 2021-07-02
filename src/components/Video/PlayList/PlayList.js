import React from 'react';
import classes from './PlayList.module.scss';

const PlayList = (props) => {
    return (
        <div className={classes.Playlist}>
            <div className={classes.PlaylistHeader}>
                <h2 className={classes.PlaylistHeader__Title}>{props.name}</h2>
                <button className={classes.PlaylistHeader__Settings}>

                </button>
            </div>
            {/* <p className={classes.HeaderVideosList__Warning}>
    </p> */}
        </div>
    )
}

export default PlayList
