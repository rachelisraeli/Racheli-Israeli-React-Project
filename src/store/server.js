import axios from 'axios';
import dataStore from './store.js';

export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    dataStore.setServices(services);
}

export async function addService(service) {
    const res = await axios.post('http://localhost:8787/service', service);
    if (res.status === 200) {
        dataStore.addService(service);
        return 'success';
    }
    else {
        return 'failed';
    }
}

export async function getMeetings() {
    const meetings = await axios.get('http://localhost:8787/appointments');
    dataStore.setMeetings(meetings);
}

export async function addMeeting(meeting) {
    console.log(meeting)
    const res = await axios.post('http://localhost:8787/appointment', {meeting});
    // const res = await axios.post('http://localhost:8787/appointment', meeting);
    if (res.status === 200) {
        dataStore.addMeeting(meeting);
        return 'success';
    }
    else {
        return 'failed';
    }
}


export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("http://localhost:8787/login", { name, password });
        if (isValid.status === 200) {
            dataStore.setIsLogin(true);
            alert('amazing');
        }
    }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
        }
        else {
            alert('server failed');
        }
    }
}