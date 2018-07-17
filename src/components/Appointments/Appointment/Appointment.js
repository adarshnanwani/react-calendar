//Dependencies
import React from 'react';
//Local style imports

const appointment = (props) => {
    const { title, datetime, createdDatetime, systemDetails } = props;

    return (
        <tr>
            <td>{title}</td>
            <td>{datetime}</td>
            <td>{createdDatetime}</td>
            <td>{systemDetails}</td>
        </tr>);

}

export default appointment;
