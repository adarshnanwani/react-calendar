//Dependencies
import React from 'react';
//Local style imports
import classes from './Backdrop.css';

const backdrop = (props) => {
    const { show, clicked } = props;
    return (show ? <div className={classes.Backdrop} onClick={clicked}></div> : null)
}

export default backdrop;
