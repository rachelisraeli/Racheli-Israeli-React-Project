import React, { useState } from 'react';
import { Button, colors } from '@mui/material'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
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
        <div>
            {/* <BusinessData isEditDialogOpen={isEditDialogOpen} /> */}
            <BusinessData isAdmin={true} />

            {/* <BusinessData isEditDialogOpen={isEditDialogOpen} onEditDialogOpen={handleEditDialogOpen} /> */}

            {/* <BusinessData /> */}
            <br />
            <br />
            {/* <Button variant="contained" onClick={handleMeetingsOpen}>
                Meetings
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={handleServicesOpen}>
                Services
            </Button> */}

            {<Button variant="contained">
                <Link to="./meetings">Meetings</Link>
            </Button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {<Button variant="contained">
                <Link to="./services">Services</Link>
            </Button>}

            {/* {isMeetingsOpen ? <MeetingsList /> : null}
            {isServicesOpen ? <ServiceList isAdmin={true} /> : null} */}

            <Outlet />

        </div>
    )
}

export default AdminHome
