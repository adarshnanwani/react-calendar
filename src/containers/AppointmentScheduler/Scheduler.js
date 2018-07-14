import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NewAppointment from '../../components/NewAppointment/NewAppointment';
import Appointments from '../../components/Appointments/List';


class Scheduler extends Component {

    state = {
        formLoaded:false,
        formLoading:false,
        newAppointment:{
            title:"",
            time:""
        },
        submitting: false,
        listLoading: false,
        listLoaded: false,
        error:false,
        appointmentList:[]
    };

    render() {
        let apps = [{
            title: "hsjsj",
            time: "sadsas"
        }];

        return (<Aux>
            <NewAppointment />
            <Appointments appointments={apps} />
        </Aux>);
    }
}

export default Scheduler;