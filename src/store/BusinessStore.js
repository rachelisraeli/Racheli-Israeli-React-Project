import { makeObservable, observable, action } from "mobx";

class BusinessStore {

    details = {
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        description: "The best coding academy in the world",
    };

    //GPT===
    constructor() {
        makeObservable(this, {
            details: observable,
            editDetails: action,
        });
    }

    editDetails(newDetails) {
        this.details = newDetails;
    }
    //GPT===

    // constructor(name, address, phone, owner, description) {
    //     makeObservable(this, {
    //         // name: observable,
    //         // address: observable,
    //         // phone: observable,
    //         // owner: observable,
    //         // description: observable,
    //         details: observable,
    //         editDetails: action,
    //         setDetails: action,
    //     });

    //     this.name = name;
    //     this.address = address;
    //     this.phone = phone;
    //     this.owner = owner;
    //     this.description = description;
    // }

    // editDetails(newName, newAddress, newPhone, newOwner, newDescription) {
    //     this.name = newName;
    //     this.address = newAddress;
    //     this.phone = newPhone;
    //     this.owner = newOwner;
    //     this.description = newDescription;
    // }

    // editDetails = (details) => {
    //     this.details = details;
    //     return { ...this.details, details };
    // }

    // setDetails = (details) => {
    //     this.details = details;
    //     return { ...this.details, details };
    // }

}

export default new BusinessStore();