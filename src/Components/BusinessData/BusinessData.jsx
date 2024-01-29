import * as React from 'react';
import { useState } from 'react';
import EditBusinessData from './EditBusinessData';

// function BusinessData({ editedBusiness, onEditDialogOpen, isAdmin }) {
function BusinessData({ isAdmin }) {

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

    // useEffect(() => {
    //     business.name = editedBusiness.name;
    // }, [business.name])

    // const handleClickOpen = () => {
    //     onEditDialogOpen(true);
    // };

    return (
        <>
            {/* {isEditDialogOpen && <EditBusinessData business={business} onUpdateBusiness={setBusiness} />} */}

            {/* {isAdmin && <EditBusinessData business={business} onUpdateBusiness={setBusiness} handleUpdateBusiness={handleUpdateBusiness} />} */}
            {isAdmin && <EditBusinessData business={business} handleUpdateBusiness={handleUpdateBusiness} />}
            {/* {isAdmin && <EditBusinessData business={business} onUpdateBusiness={handleUpdateBusiness} /> */}

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