import React from 'react';

const form = (props) => {
    return (
        <div>
            <label>Appointment Title:</label>
            <input type="text" />
            <label>Selected Datetime:</label>
            <input type="text" readOnly />
            <button>Schedule Appointment</button>
        </div>
    );
}

export default form;