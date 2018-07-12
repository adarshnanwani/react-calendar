import React from 'react';

var appointment = (props) => {
    return (
        <li> <span>{props.appointmentTitle}</span> - <span>{props.appointmentTime}</span> </li>
        );
}

export default appointment;