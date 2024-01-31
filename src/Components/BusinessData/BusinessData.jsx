import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import EditBusinessData from './EditBusinessData';
import { GetDetails } from '../../store/server';
import businessStore from '../../store/BusinessStore.js';

const BusinessData = (observer(({ isAdmin }) => {
    // function BusinessData({ isAdmin }) {

    console.log('isAdmin' + isAdmin)

    const [business, setBusiness] = useState({
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        description: "The best coding academy in the world",
    });

    const handleUpdateBusiness = (editedBusiness) => {
        console.log("BusinessData", editedBusiness)
        setBusiness(editedBusiness);
    };

    const updateBusinessDetailsInView = (newDetails) => {
        setBusiness(newDetails);
    };

    useEffect(() => {
        GetDetails();
    }, [business])


    // const handleClickOpen = () => {
    //     onEditDialogOpen(true);
    // };

    return (
        <>
            {isAdmin && <EditBusinessData business={business} handleUpdateBusiness={handleUpdateBusiness} updateBusinessDetailsInView={updateBusinessDetailsInView} />}

            <div>
                <h1>{businessStore.details.name}</h1>
                <p><strong>Address:</strong> {businessStore.details.address}</p>
                <p><strong>Phone:</strong> {businessStore.details.phone}</p>
                <p><strong>Owner:</strong> {businessStore.details.owner}</p>
                <p><strong>Description:</strong> {businessStore.details.description}</p>

                {/* <h1>{business.name}</h1>
                <p><strong>Address:</strong> {business.address}</p>
                <p><strong>Phone:</strong> {business.phone}</p>
                <p><strong>Owner:</strong> {business.owner}</p>
                <p><strong>Description:</strong> {business.description}</p> */}
            </div>

        </>
    )
}))

export default BusinessData