import React from 'react';
import Appointment from './Appointment/Appointment';
import classes from './List.css';

const appointmentList = (props) => {

    const appointments = [];
    for (let appointment of props.appointments) {
        appointments.push(
            {
                title: appointment.title,
                time: appointment.time
            }
        );
    }

    const appointmentsOutput = appointments.map((appt, index) => {
        return (<Appointment key={index} title={appt.title} time={appt.time} />);
    });


    return (
        <div className={classes.appointmentList}>
            <h2>List of appointments:</h2>
            <ul className={classes.appointmentListUl}>
                {appointmentsOutput}
            </ul>
        </div>
    );
}

export default appointmentList;