import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { useState } from "react";
import AddMeeting from './AddMeeting';

function Meeting() {

    const [meet, setMeet] = useState({});

    const handleMeetChange = (event) => {
        if (event.target === undefined) {
            setMeet({ ...meet, dateTime1: event });
        }
        else {
            setMeet({ ...meet, [event.target.name]: event.target.value });
        }
        console.log(event)
        console.log(meet)
    };

    return (
        <>
            <form>
                <label>
                    להוסיף בחירה של סוג פגישה   serviceType
                    <br />
                    הוא מכניס פגישה גם אם אין את כל הערכים
                    <br />
                    <br />
                    <TextField
                        required
                        type='text'
                        // id="outlined-required"
                        id='name'
                        name='name'
                        label="Name"
                        value={meet.name}
                        onChange={handleMeetChange}
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        type='tel'
                        // id="outlined-required"
                        id='phone'
                        name='phone'
                        label="Phone"
                        value={meet.phone}
                        onChange={handleMeetChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        type='email'
                        // id="outlined-required"
                        id='email'
                        name='email'
                        label="E-Mail"
                        value={meet.email}
                        onChange={handleMeetChange}
                    />
                    <br />
                    <br />
                </label>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        id="dateTime1"
                        name='selectedDateTime'
                        // value={meet.selectedDateTime}
                        value={meet.dateTime1}
                        onChange={handleMeetChange}
                    />
                </LocalizationProvider>
            </form>
            <br />
            <br />
            <AddMeeting meet={meet} />
            {/* <AddMeeting meet="meet" /> */}
            {/* <Button onClick={handleSaveClick}>Save</Button> */}
        </>
    );
}
export default Meeting;
