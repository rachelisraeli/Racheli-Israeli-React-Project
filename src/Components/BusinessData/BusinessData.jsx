import * as React from 'react';
import { useState } from 'react';
import EditBusinessData from './EditBusinessData';

function BusinessData({ isEditDialogOpen, onEditDialogOpen }) {

    const [business, setBusiness] = useState({
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        description: "The best coding academy in the world",
    });

    const handleClickOpen = () => {
        onEditDialogOpen(true);
    };

    // const business = {
    //     name: "Coding Academy",
    //     address: "Rothschild 60 Tel Aviv",
    //     phone: "03-1234567",
    //     owner: "Yariv Katz",
    //     // logo: "https://coding-academy.org/images/ca_logo.png",
    //     description: "The best coding academy in the world",
    // };

    return (
        <>
            {isEditDialogOpen && <EditBusinessData business={business} onUpdateBusiness={setBusiness} />}

            {/* <EditBusinessData business={business} onUpdateBusiness={setBusiness} /> */}

            {/* <EditBusinessData /> */}

            {/* <Button variant="contained" onClick={handleClickOpen}>Edit details</Button>
            {isEditDialogOpen && <EditBusinessData />} */}

            {/* {isEditDialogOpen && <EditBusinessData onUpdateBusiness={(editedBusiness) => setBusiness(editedBusiness)} />} */}

            <div>
                <h1>{business.name}</h1>
                <p><strong>Address:</strong> {business.address}</p>
                <p><strong>Phone:</strong> {business.phone}</p>
                <p><strong>Owner:</strong> {business.owner}</p>
                {/* <img src={business.logo} alt="Business Logo" style={{ maxWidth: '200px' }} /> */}
                <p><strong>Description:</strong> {business.description}</p>
            </div>


        </>
    )
}

export default BusinessData