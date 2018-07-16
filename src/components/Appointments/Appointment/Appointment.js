//Dependencies
import React from 'react';

const appointment = (props) => {
    const { title, time } = props;

    return <li><span>{title}</span> - <span>{time}</span> </li>;

}

export default appointment;
