import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NewAppointment from '../../components/NewAppointment/NewAppointment';
import Appointments from '../../components/Appointments/List';
import moment from 'moment';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-scheduler';

class Scheduler extends Component {

    state = {
        formLoaded: false,
        formLoading: false,
        appointmentForm: {
            title: "",
            datetime: ""
        },
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

        updatedAppointmentForm.title = event.target.value;
        this.setState({
            appointmentForm: updatedAppointmentForm
        });
    }

    dateTimeChangedHandler = (event) => {
        const updatedAppointmentForm = {
            ...this.state.appointmentForm
        };
        updatedAppointmentForm.datetime = moment(event).format('MMMM Do YYYY, h:mm:ss a');

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
        this.setState({
            appointmentForm:{
                title:"",
                datetime:""
            }
        })
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
                title={this.state.appointmentForm.title}
                dateTimeChanged={this.dateTimeChangedHandler}
                selectedDateTime={this.state.appointmentForm.datetime} />;
            <Appointments appointments={apps} />
        </Aux>);
    }
}

export default withErrorHandler(Scheduler, axios);