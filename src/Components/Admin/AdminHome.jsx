import React, { useState } from 'react';
import { Button } from '@mui/material'
import ServiceList from '../Services/ServicesList';
import BusinessData from '../BusinessData/BusinessData';
import MeetingsList from '../Meeting/MeetingsList';

function AdminHome() {

    const [isMeetingsOpen, setIsMeetingsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    // const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    // const handleEditDialogOpen = () => {
    //     setIsEditDialogOpen(true);
    // };

    const handleEditDialogOpen = (isOpen) => {
        setIsEditDialogOpen(isOpen);
    };

    const handleMeetingsOpen = () => {
        setIsMeetingsOpen(true);
        setIsServicesOpen(false);
    };

    const handleServicesOpen = () => {
        setIsServicesOpen(true);
        setIsMeetingsOpen(false);
    };

    return (
        <div style={{backgroundColor: 'red'}}>
            {/* <BusinessData isEditDialogOpen={isEditDialogOpen} /> */}
            <BusinessData isAdmin={true} />

            {/* <BusinessData isEditDialogOpen={isEditDialogOpen} onEditDialogOpen={handleEditDialogOpen} /> */}

            {/* <BusinessData /> */}
            <br />
            <br />
            <Button variant="contained" onClick={handleMeetingsOpen}>
                Meetings
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={handleServicesOpen}>
                Services
            </Button>
            {isMeetingsOpen ? <MeetingsList /> : null}
            {isServicesOpen ? <ServiceList /> : null}
            {/* {isMeetingsOpen ? <MeetingsList /> : <ServiceList />}
            {isServicesOpen ? <ServiceList /> : <ServiceList />} */}
            <br />
            <br />
        </div>
    )
}

export default AdminHome
