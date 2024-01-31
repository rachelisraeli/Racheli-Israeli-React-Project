import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import EditBusinessData from './EditBusinessData';
import businessStore from '../../store/BusinessStore.js'

const BusinessData = (observer(({ isAdmin }) => {
    // function BusinessData({ isAdmin }) {

    console.log('isAdmin' + isAdmin)

    // const [business, setBusiness] = useState({
    //     name: businessStore.name || "Coding Academy",
    //     address: businessStore.address || "Rothschild 60 Tel Aviv",
    //     phone: businessStore.phone || "03-1234567",
    //     owner: businessStore.owner || "Yariv Katz",
    //     description: businessStore.description || "The best coding academy in the world",
    // });

    const [business, setBusiness] = useState({
        name: businessStore.name,
        address: businessStore.address,
        phone: businessStore.phone,
        owner: businessStore.owner,
        description: businessStore.description,
    });

    // const [business, setBusiness] = useState({
    //     name: "Coding Academy",
    //     address: "Rothschild 60 Tel Aviv",
    //     phone: "03-1234567",
    //     owner: "Yariv Katz",
    //     description: "The best coding academy in the world",
    // });

    // const [name, setName]=

    const handleUpdateBusiness = (editedBusiness) => {
        console.log("BusinessData", editedBusiness)
        setBusiness(editedBusiness);
    };

    // useEffect(() => {
    //     setDetails();
    // }, [business])


    // const handleClickOpen = () => {
    //     onEditDialogOpen(true);
    // };

    return (
        <>
            {isAdmin && <EditBusinessData business={business} handleUpdateBusiness={handleUpdateBusiness} />}

            <div>
                <h1>{businessStore.name}</h1>
                <p><strong>Address:</strong> {businessStore.address}</p>
                <p><strong>Phone:</strong> {businessStore.phone}</p>
                <p><strong>Owner:</strong> {businessStore.owner}</p>
                {/* <img src={business.logo} alt="Business Logo" style={{ maxWidth: '200px' }} /> */}
                <p><strong>Description:</strong> {businessStore.description}</p>
                {/* <h1>{business.name}</h1>
                <p><strong>Address:</strong> {business.address}</p>
                <p><strong>Phone:</strong> {business.phone}</p>
                <p><strong>Owner:</strong> {business.owner}</p>
                {/* <img src={business.logo} alt="Business Logo" style={{ maxWidth: '200px' }} /> */}
                {/* <p><strong>Description:</strong> {business.description}</p> */}
            </div>

        </>
    )
}))

export default BusinessData