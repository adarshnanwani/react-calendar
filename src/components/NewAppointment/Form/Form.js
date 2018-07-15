import React from 'react';
import Input from '../../UI/Input/Input';
import Calendar from 'react-datetime';
import classes from './Form.css';

const form = (props) => {
    return (
        <div className={classes.form}>
            <form>
                <label>Appointment Title:</label>
                <Input inputType="input" type="text" changed={(event) => props.titleChanged(event)} value={props.title} />
                <label>Select date and time:</label>
                <Calendar onChange={(event) => props.dateTimeChanged(event)} className={classes.dateTime} />
                <section className={classes.currentSelection}>
                    <label className={classes.selectionLabel}>Current Selection:</label>
                    <span>{props.selectedDateTime ? props.selectedDateTime : "Please select a date"}</span>
                </section>
                <button onClick={props.onClickHandler}>Schedule Appointment</button>
            </form>
        </div>
    );
}

export default form;