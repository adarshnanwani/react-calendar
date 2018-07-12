import React from 'react';

var appointment = (props) => {
    return (
        <li> <span>{props.title}</span> - <span>{props.time}</span> </li>
        );
}

export default appointment;