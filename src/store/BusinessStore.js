import { makeObservable, observable, action } from "mobx";

class BusinessStore {

    details = {
        name: "CHAYA WIGS",
        address: "Rashi 60 Elad",
        phone: "03-9090742",
        owner: "Chaya Katz",
        description: "Dream wig design",
    };

    constructor() {
        makeObservable(this, {
            details: observable,
            editDetails: action,
        });
    }

    editDetails(newDetails) {
        if (Object.keys(newDetails).length) {
            this.details = newDetails;
        }
    }

}

export default new BusinessStore();