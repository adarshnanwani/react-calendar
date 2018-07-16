//Dependencies
import React from 'react';
import Calendar from 'react-datetime';
//Hoc
import Aux from '../../hoc/Auxiliary/Auxiliary';
//UI Component imports
import Spinner from '../UI/Spinner/Spinner';
import Input from '../UI/Input/Input';
//Local style imports
import classes from './NewAppointment.css';

const newAppointment = (props) => {

    const { titleChanged, dateTimeChanged, dateTimeModel, onSubmit, submitting, titleModel } = props;

    const { form, dateTime, currentSelection, selectionLabel } = classes;
    let submitBtn = (titleModel.valid && dateTimeModel.valid) ? <button onClick={onSubmit} >Schedule Appointment</button> : null;
    let newAppointmentSection = (
        <Aux>
                <h3>Schedule an appointment:</h3>
                <div className={form}>
                    <form>
                        <label>Appointment Title:</label>
                        <Input
                            elementType="input"
                            elementConfig={titleModel.config}
                            changed={(event) => titleChanged(event)}
                            value={titleModel.value} />
                        <label>Select date and time:</label>
                        <Calendar
                            onChange={(event) => dateTimeChanged(event)}
                            className={dateTime} />
                        <section className={currentSelection}>
                            <label className={selectionLabel}>Current Selection:</label>
                            <span>{dateTimeModel.value ? dateTimeModel.value : "Please select a date"}</span>
                        </section>
                        {submitBtn}
                    </form>
                </div>
            </Aux>);

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
