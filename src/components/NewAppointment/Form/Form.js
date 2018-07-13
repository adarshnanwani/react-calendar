import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './Form.css';

const form = (props) => {
    return (
        <div className={classes.form}>
            <label>Appointment Title:</label>
            <Input inputType="input" type="text" />
            <label>Selected Datetime:</label>
            <Input inputType="input" type="text" readOnly />
            <button>Schedule Appointment</button>
        </div>
    );
}

export default form;