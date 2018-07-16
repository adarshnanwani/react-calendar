import React, { Component } from 'react';
import Calendar from 'react-datetime';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import Spinner from '../UI/Spinner/Spinner';
import Input from '../UI/Input/Input';

import classes from './NewAppointment.css';

const newAppointment =(props) => {

const { titleChanged, dateTimeChanged, selectedDateTime, onSubmit, submitting } = props;
        let newAppointmentSection = (
            <Aux>
                <h3>Schedule an appointment:</h3>
                <div className={classes.form}>
                    <form>
                        <label>Appointment Title:</label>
                        <Input
                            elementType="input"
                            type="text"
                            changed={(event) => titleChanged(event)}
                            value={props.title} />
                        <label>Select date and time:</label>
                        <Calendar
                            onChange={(event) => dateTimeChanged(event)}
                            className={classes.dateTime} />
                        <section className={classes.currentSelection}>
                            <label className={classes.selectionLabel}>Current Selection:</label>
                            <span>{selectedDateTime ? selectedDateTime : "Please select a date"}</span>
                        </section>
                        <button onClick={onSubmit}>Schedule Appointment</button>
                    </form>
                </div>
            </Aux>
        );

        if (submitting) {
            newAppointmentSection = <Spinner />
        }
        return (
            <div className={classes.newAppointment}>
                <h2>React Scheduler</h2>
                {newAppointmentSection}
            </div>
        );
}

export default newAppointment;