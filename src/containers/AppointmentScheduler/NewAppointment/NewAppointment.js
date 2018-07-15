import React, { Component } from 'react';
import Calendar from 'react-datetime';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './NewAppointment.css';

class NewAppointment extends Component {

    state = {
        appointmentForm: {
           title: "",
           datetime: ""
       },
       appointmentFormNew: {
           title: {
               elementType : 'input',
               elementConfig: {
                   type: 'text',
                   placeholder:'Enter appointment title'
               },
               value:'',
               validation:{
                   required: true
               },
               valid:false
           },
           datetime: {
               value:'',
               validation:{
                   required:true
               },
               valid:false
           }
       },
       submitting: false,
       error: false,
   };

    render() {
        let newAppointmentSection = (
            <Aux>
                <h3>Schedule an appointment:</h3>
                <div className={classes.form}>
                    <form>
                        <label>Appointment Title:</label>
                        <Input
                            inputType="input"
                            type="text"
                            changed={(event) => this.props.titleChanged(event)}
                            value={this.props.title} />
                        <label>Select date and time:</label>
                        <Calendar
                            onChange={(event) => this.props.dateTimeChanged(event)}
                            className={classes.dateTime} />
                        <section className={classes.currentSelection}>
                            <label className={classes.selectionLabel}>Current Selection:</label>
                            <span>{this.props.selectedDateTime ? this.props.selectedDateTime : "Please select a date"}</span>
                        </section>
                        <button onClick={this.props.onSubmit}>Schedule Appointment</button>
                    </form>
                </div>
            </Aux>
        );

        if (this.props.submitting) {
            newAppointmentSection = <Spinner />
        }
        return (
            <div className={classes.newAppointment}>
                <h2>React Scheduler</h2>
                {newAppointmentSection}
            </div>
        );
    }
}

export default NewAppointment;