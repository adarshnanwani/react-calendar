import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Form from './Form/Form';
import classes from './NewAppointment.css';

const newAppointment = (props) => {
    const header = (
        <Aux>
            <h2>React Scheduler</h2>
            <h3>Schedule an appointment:</h3>
        </Aux>);
    return (
        <div className={classes.newAppointment}>
            {header}
            <Form 
            titleChanged={props.titleChanged}
            title={props.title}
            dateTimeChanged={props.dateTimeChanged}
            onClickHandler={props.onSubmit}/>
        </div>
    );
}

export default newAppointment;