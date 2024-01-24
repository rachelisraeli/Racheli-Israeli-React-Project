import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { useState } from "react";
import AddService from './AddService';
import Meeting from '../Meeting/Meeting';

function Service() {

    const [service, setService] = useState({});

    const handleServiceChange = (event) => {
        setService({ ...service, [event.target.name]: event.target.value });
        console.log(event)
        console.log(service)
    };


    return (
        <>
            <form>
                <label>
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        name='id'
                        label="id"
                        value={service.id || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        name='name'
                        label="name"
                        value={service.name || ''}
                        onChange={handleServiceChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        type='text'
                        id="outlined-required"
                        name='description'
                        label="description"
                        value={service.description || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                    <TextField
                        type='number'
                        id="outlined-required"
                        name='price'
                        label="price"
                        value={service.price || ''}
                        onChange={handleServiceChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        type='text'
                        id="outlined-required"
                        name='duration'
                        label="duration"
                        value={service.duration || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                </label>
            </form>
            <AddService service={service} />
            <br />
            <br />
        </>
    )
}

export default Service
