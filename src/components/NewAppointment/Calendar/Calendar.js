import React from 'react';
import Calendar from 'react-datetime';
import classes from './Calendar.css';

const calendar = (props) => {
    return (
        <div className={classes.Calendar}>
            <Calendar />
        </div>
    )
}

export default calendar;