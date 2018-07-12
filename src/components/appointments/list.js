import React from 'react';
import Appointment from './appointment';

const appointmentList = (props) => {
    
    const appointments = [];
    for (let appointment in props.appointments) {
        appointments.push(
            {
                title: appointment.title,
                amount: appointment.time
            }
        );
    }
    
    appointments.map(app => {
        return (<Appointment
                    title={app.title}
                    time={app.time}
                    key={app.time}> </Appointment>);
    });
    
    
    return (
        {appointments}
        );
}

export default appointmentList;