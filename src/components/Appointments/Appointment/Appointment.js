//Dependencies
import React from 'react';
//Local style imports
import classes from './Appointment.css';

const appointment = (props) => {
    const { title, datetime } = props;
    const { Appointment, titleAppointment} = classes;
    return <li className={Appointment}><span className={titleAppointment}>{title}</span> - <span>{datetime}</span> </li>;

}

export default appointment;
