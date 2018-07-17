//Dependencies
import React from 'react';
//UI Component imports
import Spinner from '../UI/Spinner/Spinner';
//Local Component imports
import Appointment from './Appointment/Appointment';
//Local style imports
import classes from './List.css';

const list = (props) => {

    const { AppointmentList } = classes;

    let appointments = props.appointments.map(appt => (
        <Appointment
            key={appt.id}
            title={appt.title}
            datetime={appt.datetime}
            systemDetails={appt.systemDetails}
            createdDatetime={appt.createdDatetime} />
    ));
    if (props.loading) {
        appointments = <Spinner />;
    }
    return (
        <div className={AppointmentList}>
            <h2>List of appointments:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Created Date</th>
                        <th>Browser</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments}
                </tbody>
            </table>
        </div>
    );

}

export default list;
