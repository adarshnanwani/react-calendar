import React from 'react';

const input = (props) => {
    let output;
    switch (props.type){
    case 'text':
    output = (<input type="text"/>);
    break;
    default:
    output = (<input type="text"/>);
    break;
    }
    return output;

}

export default input;