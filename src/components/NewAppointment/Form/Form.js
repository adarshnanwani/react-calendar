import React from 'react';
import classes from './Form.css';

const form = (props) => {
    return (
        <div className={classes.form}>
            <label>Appointment Title:</label>
            <input type="text" />
            <label>Selected Datetime:</label>
            <input type="text" readOnly />
            <button>Schedule Appointment</button>
        </div>
    );
}

export default form;