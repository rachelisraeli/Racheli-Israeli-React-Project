import React, { useState } from 'react';
import { Button, colors } from '@mui/material'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BusinessData from '../BusinessData/BusinessData';
import "./Admin.css";

function AdminHome() {

    return (
        <div>

            <BusinessData isAdmin={true} className='businessData' />

            {<Button variant="contained" className='button'>
                <Link to="./meetings">Meetings</Link>
            </Button>}

            {<Button variant="contained" className='button'>
                <Link to="./services">Services</Link>
            </Button>}

            <Outlet />

        </div>
    )
}

export default AdminHome
