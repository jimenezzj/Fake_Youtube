import React from 'react'
import classes from './Channel.module.scss';

const Channel = (props) => {
    return (
        <div className={classes.Channel}>
            <div className={classes.Channel__Actions}>
                <figure className={classes.Channel__logo} style={{ width: "50px", height: "50px" }}>
                </figure>
                <div className={classes.Channel__Info}>
                    <h2 className={classes.Channel__Name}>{props.name}</h2>
                    <p className={classes.Channel__Subs}>{props.subs}</p>
                </div>
            </div>
            <button className={classes.btn}>Subscribe</button>
        </div>
    )
}

export default Channel;
