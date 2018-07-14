import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NewAppointment from '../../components/NewAppointment/NewAppointment';
import Appointments from '../../components/Appointments/List';
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
            })
            .catch(error => {
                this.setState({
                    submitting: false
                });
            });
    }

    render() {
        let apps = [{
            title: "hsjsj",
            time: "sadsas"
        }];

        return (<Aux>
            <NewAppointment onSubmit={this.appointmentHandler} />
            <Appointments appointments={apps} />
        </Aux>);
    }
}

export default Scheduler;