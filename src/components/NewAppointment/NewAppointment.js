import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Calendar from './Calendar/Calendar';
import Form from './Form/Form';

const newAppointment = (props) => {
    const header = <h1>React Calendar</h1>
    return (
        <Aux>
            {header}
            <Calendar />
            <Form />
        </Aux>
    );
}

export default newAppointment;