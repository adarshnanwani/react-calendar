//Dependencies
import React from 'react';
//UI Component imports
import Spinner from '../UI/Spinner/Spinner';
//Local Component imports
import Appointment from './Appointment/Appointment';
//Local style imports
import classes from './List.css';

const list = (props) => {

    const { AppointmentList, AppointmentListUl } = classes;

    let appointments = props.appointments.map(appt => (
        <Appointment 
                 key={appt.id} 
                 title={appt.title} 
                 datetime={appt.datetime} />
    ));
    if (props.loading) {
        appointments = <Spinner />;
    }
    return (
        <div className={AppointmentList}>
            <h2>List of appointments:</h2>
            <ul className={AppointmentListUl}>
                {appointments}
            </ul>
        </div>
    );

}

export default list;
