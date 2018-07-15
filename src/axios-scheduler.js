import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-scheduler-5a700.firebaseio.com/'
});

export default instance;