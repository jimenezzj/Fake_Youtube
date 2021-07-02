import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Miniature.module.scss';

const Miniature = (props) => {
    return (
        <NavLink to={props.link} className={classes.Miniature}>
            <img alt={"Some texting representation of the overed video"} src={props.poster}
                className={classes.Miniature__VideoImg} />
            <div className={classes.Miniature__Desc}>
                <div className={classes.Miniature__Info}>
                <figure style={{ backgroundColor: "red" }}
                    className={classes.Miniature__ChannelLogo}></figure>
                    <p className={classes.Miniature__channel}>Channel Name</p>
                    <h2 className={classes.Miniature__Name}>{props.title}</h2>

                </div>
            </div>
        </NavLink>
    )
}

export default Miniature;
