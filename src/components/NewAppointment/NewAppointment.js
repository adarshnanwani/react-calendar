import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../UI/Spinner/Spinner';
import Form from './Form/Form';
import classes from './NewAppointment.css';

const newAppointment = (props) => {

    let newAppointmentSection = (
        <Aux>
            <h3>Schedule an appointment:</h3>
            <Form
                titleChanged={props.titleChanged}
                title={props.title}
                selectedDateTime={props.selectedDateTime}
                dateTimeChanged={props.dateTimeChanged}
                onClickHandler={props.onSubmit} />
        </Aux>
    );

    if (props.submitting) {
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