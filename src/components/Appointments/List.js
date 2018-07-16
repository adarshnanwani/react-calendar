//Dependencies
import React from 'react';
//Local Component imports
import Appointment from './Appointment/Appointment';
//Local style imports
import classes from './List.css';

const appointmentList = (props) => {

    const { AppointmentList, AppointmentListUl } = classes;

    const appointments = [];

    for (let appointment of props.appointments) {
        appointments.push({
            title: appointment.title,
            time: appointment.time
        });
    }

    const appointmentsOutput = appointments.map((appt, index) => {
        return (<Appointment key={index} title={appt.title} time={appt.time} />);
    });


    return (
        <div className={AppointmentList}>
            <h2>List of appointments:</h2>
            <ul className={AppointmentListUl}>
                {appointmentsOutput}
            </ul>
        </div>
    );
}

export default appointmentList;
