import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button, TextField } from '@mui/material';
import { useState } from "react";
import { addMeeting } from '../../store/server';

function Meeting() {

    const [meet, setMeet] = useState({
        // name: '',
        // phone: '',
        // email: '',
        selectedDateTime: null //GPT
    });

    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleMeetChange = (event) => {
        setMeet({ ...meet, [event.target.id]: event.target.value });
        //GPT // setMeet({ ...meet, name: event.target.value });
    };

    const handleSaveClick = () => {
        // console.log(addMeeting(selectedDateTime));
        console.log(addMeeting(meet.selectedDateTime)); //GPT
    };

    //GPT
    // const handleSaveClick = async () => {
    //     const result = await addMeeting(meet);
    //     if (result === 'success') {
    //         console.log("Meeting added successfully!");
    //         // נקרא לפונקציה שתעדכן את הרשימה
    //         await getMeetings();
    //     } else {
    //         console.log("Failed to add meeting.");
    //     }
    // };

    //GPT
    // const handleSaveClick = () => {
    //     console.log(addMeeting(meet.selectedDateTime));
    // };

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handlePhoneChange = (event) => {
    //     setPhone(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handleDateTimeChange = (date) => {
    //     setSelectedDateTime(date);
    // };

    return (
        <>
            <form>
                <label>
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        name='name'
                        label="Name"
                        value={meet.name}
                        onChange={handleMeetChange}
                    // value={name}
                    // onChange={handleNameChange}
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        type='tel'
                        id="outlined-required"
                        name='phone'
                        label="Phone"
                        value={meet.phone}
                        onChange={handleMeetChange}
                    // value={phone}
                    // onChange={handlePhoneChange}
                    />
                    &nbsp;&nbsp;
                    <TextField
                        type='email'
                        id="outlined-required"
                        name='email'
                        label="E-Mail"
                        value={meet.email}
                        onChange={handleMeetChange}
                    // value={email}
                    // onChange={handleEmailChange}
                    />
                    <br />
                    <br />
                </label>
            </form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    name='selectedDateTime'
                    value={meet.selectedDateTime}
                    onChange={(date) => setMeet({ ...meet, selectedDateTime: date })} //GPT
                // onChange={handleMeetChange}

                // value={selectedDateTime}
                // onChange={handleDateTimeChange}
                />
            </LocalizationProvider>
            <br />
            <br />
            <Button onClick={handleSaveClick}>Save</Button>
        </>
    );
}
export default Meeting;
