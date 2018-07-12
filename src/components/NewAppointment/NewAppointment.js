import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Calendar from './Calendar/Calendar';
import Form from './Form/Form';

const newAppointment = (props) => {
    return (
        <Aux>
            <Calendar />
            <Form />
        </Aux>
    );
}

export default newAppointment;