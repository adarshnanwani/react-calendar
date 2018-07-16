//Dependencies
import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
//HOC
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-scheduler';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//Local Component imports
import NewAppointment from '../../components/NewAppointment/NewAppointment';
import Appointments from '../../components/Appointments/List';
//Config imports
import { defaultFormModel } from './SchedulerConfig.js';


class Scheduler extends Component {

    state = {
        appointmentFormNew: {
            title: "",
            datetime: ""
        },
        appointmentForm: _.cloneDeep(defaultFormModel),
        submitting: false,
        listLoading: false,
        listLoaded: false,
        error: false,
        appointmentList: []
    };

    titleChangedHandler = (event) => {
        const updatedAppointmentForm = {
            ...this.state.appointmentForm
        };

        updatedAppointmentForm.title.value = event.target.value;
        updatedAppointmentForm.title.valid = this.validateField(updatedAppointmentForm.title.value, updatedAppointmentForm.title.validation)
        this.setState({
            appointmentForm: updatedAppointmentForm
        });
    }

    dateTimeChangedHandler = (event) => {
        const updatedAppointmentForm = {
            ...this.state.appointmentForm
        };
        updatedAppointmentForm.datetime.value = moment(event).format('MMMM Do YYYY, h:mm:ss a');
        updatedAppointmentForm.datetime.valid = this.validateField(updatedAppointmentForm.datetime.value, updatedAppointmentForm.datetime.validation)

        this.setState({
            appointmentForm: updatedAppointmentForm
        });
    }

    appointmentHandler = (event) => {
        event.preventDefault();
        const appointment = {
            title: this.state.appointmentForm.title,
            datetime: this.state.appointmentForm.datetime
        };
        this.setState({
            submitting: true
        });

        axios.post('/appointments.json', appointment)
            .then(response => {
                this.setState({
                    submitting: false
                });
                this.resetForm();
            })
            .catch(error => {
                this.setState({
                    submitting: false
                });
                this.resetForm();
            });
    }

    resetForm = () => {
        const model = _.cloneDeep(defaultFormModel);
        this.setState({
            appointmentForm: model
        })
    };

    validateField = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }


    render() {
        let apps = [{
            title: "hsjsj",
            time: "sadsas"
        }];

        return (<Aux>
            <NewAppointment
                onSubmit={this.appointmentHandler}
                submitting={this.state.submitting}
                titleChanged={this.titleChangedHandler}
                titleModel={this.state.appointmentForm.title}
                dateTimeChanged={this.dateTimeChangedHandler}
                dateTimeModel={this.state.appointmentForm.datetime} />
            <Appointments appointments={apps} />
        </Aux>);
    }
}

export default withErrorHandler(Scheduler, axios);
