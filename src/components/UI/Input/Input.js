//Dependencies
import React from 'react';
//Local style imports
import classes from './Input.css';

const input = (props) => {
    const { elementType, elementConfig, value, changed } = props;
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    switch (elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed} />;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed} />;
            break;
    }
    return inputElement;

}

export default input;
