import { makeObservable, observable, action } from "mobx";

class DataStore {

    services = [];
    meetings = [];
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            services: observable,
            setServices: action,
            addService: action,
            meetings: observable,
            setMeetings: action,
            addMeeting: action,
        })
    }

    setIsLogin(status) {
        this.isLogin = status;
    }

    setServices = (services) => {
        this.services = [...this.services, ...services];
    }

    addService = (service) => {
        this.services = [...this.services, service];
    }

    setMeetings = (meetings) => {
        this.meetings = [...this.meetings, meetings];
    }

    addMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting];
    }
}

export default new DataStore();