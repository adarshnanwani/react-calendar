import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NewAppointment from '../../components/NewAppointment/NewAppointment';
import Appointments from '../../components/Appointments/List';


class Scheduler extends Component {

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