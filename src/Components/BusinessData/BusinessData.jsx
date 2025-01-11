import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import EditBusinessData from './EditBusinessData';
import { GetDetails } from '../../store/server';
import businessStore from '../../store/BusinessStore.js';
import "./BusinessData.css";

const BusinessData = (observer(({ isAdmin }) => {

    const [business, setBusiness] = useState({
        name: "CHAYA WIGS",
        address: "Rashi 60 Elad",
        phone: "03-9090742",
        owner: "Chaya Katz",
        description: "Dream wig design",
    });

    const handleUpdateBusiness = (editedBusiness) => {
        setBusiness(editedBusiness);
    };

    const updateBusinessDetailsInView = (newDetails) => {
        setBusiness(newDetails);
    };

    useEffect(() => {
        GetDetails();
    }, [])

    return (
        <>
            {isAdmin && <EditBusinessData className='editButton' business={business} handleUpdateBusiness={handleUpdateBusiness} updateBusinessDetailsInView={updateBusinessDetailsInView} />}
            <div className='container'>
                <p className='title'>{businessStore.details.name}</p>
                <p><strong>Address:</strong> {businessStore.details.address}</p>
                <p><strong>Phone:</strong> {businessStore.details.phone}</p>
                <p><strong>Owner:</strong> {businessStore.details.owner}</p>
                <p><strong>Description:</strong> {businessStore.details.description}</p>
            </div>

        </>
    )
}))

export default BusinessData