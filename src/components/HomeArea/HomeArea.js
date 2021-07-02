import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import UrlHandler from '../../util/UrlHandler';
import Video from '../Video/Video';
import classes from './HomeArea.module.scss';
import Miniature from './Miniature/Miniature';

const Home = ({ valSearched }) => {

    const urlHandler = UrlHandler();
    let { path, url } = useRouteMatch();

    const [stateVideos, setStateVideos] = useState([]);
    const videoSearcher = useSelector(state => state.videosReducer);
    // const dispatch = useDispatch();

    useEffect(() => {
        const urlSearchHndlr = { ...UrlHandler() };
        urlSearchHndlr.addEndPointVal("videos");
        urlSearchHndlr.addParam("search", videoSearcher.searchVal);
        fetch(urlSearchHndlr.getParsedURL(true, true))
            .then(res => res.json())
            .then(res => {
                if (res.status !== 200) {
                    const err = new Error(res.message);
                    throw err;
                }
                console.log({ ...res.videos });
                setStateVideos(res.videos);
            })
            .catch(err => {
                console.log(err);
                console.error(err);
            });
    }, [videoSearcher]);

    useEffect(() => {
        urlHandler.addEndPointVal("videos");
        fetch(urlHandler.getParsedURL(true))
            .then(res => res.json())
            .then(res => {
                if (res.status !== 200) {
                    const err = new Error(res.message);
                    throw err;
                }
                // console.log(res);
                setStateVideos(res.videos);
            })
            .catch(err => {
                console.error(err);
                console.log(err);
            });
    }, []);

    useEffect(() => {
        console.log(stateVideos);
    }, [stateVideos]);

    const createVideosList = (videosArr) => {
        console.log("HomeArea");
        if (videosArr.length === 0) {
            // Here should return something
            console.log("List its empty");
            return <p>This list is empty</p>
        }
        const items = videosArr.map(({ title, poster, id, ...videos }) => {
            const link = url + "/" + id;
            return <li className={classes.Videos__item} key={id} >
                <Miniature title={title} poster={poster} link={link} />
            </li >
        }).slice(0, 10);
        return items;
    }

    return (
        <Fragment>
            <Switch>
                <Route exact path={"/home/:idVideo"} component={Video}></Route>
                <Route path="">
                    <div className={classes.Home}>
                        <div className={classes.Videos}>
                            <h1 className={classes.Title}>Some Title</h1>
                            <ul className={classes.Videos__list}>
                                {createVideosList(stateVideos)}
                            </ul>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Fragment>
    )
}

export default Home;
