import { makeObservable, observable, action } from "mobx";

class BusinessStore {

    name;
    address;
    phone;
    owner;
    description;

    constructor(name, address, phone, owner, description) {
        makeObservable(this, {
            name: observable,
            address: observable,
            phone: observable,
            owner: observable,
            description: observable,
            updateDetails: action,
        });

        this.name = name;
        this.address = address;
        this.phone = phone;
        this.owner = owner;
        this.description = description;
    }

    updateDetails(newName, newAddress, newPhone, newOwner, newDescription) {
        this.name = newName;
        this.address = newAddress;
        this.phone = newPhone;
        this.owner = newOwner;
        this.description = newDescription;
    }
}

export default new BusinessStore();