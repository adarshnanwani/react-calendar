import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Calendar from './Calendar/Calendar';
import Form from './Form/Form';
import classes from './NewAppointment.css';

const newAppointment = (props) => {
    const header = (
        <Aux>
            <h1>React Calendar</h1>
            <h2>Select date and time:</h2>
        </Aux>);
    return (
        <div className={classes.newAppointment}>
            {header}
            <Calendar />
            <Form />
        </div>
    );
}

export default newAppointment;