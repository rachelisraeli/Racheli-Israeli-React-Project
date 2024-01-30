import React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addMeeting } from '../../store/server.js';

const AddMeeting = observer((props) => {

    const [meeting, setMeeting] = useState({});
    const [typeService, setTypeService] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    // const [updateError, setUpdateError] = useState(false);

    const handleChange = (event) => {
        setTypeService(event.target.value);
    };

    const handleMeetingChange = (event) => {
        const newMeeting = event.target === undefined
            ? { ...meeting, dateTime: event }
            : { ...meeting, [event.target.name]: event.target.value };

        newMeeting.typeService = typeService;
        setMeeting(newMeeting);
        validateForm(newMeeting);
    };

    //     const handleMeetingChange = (event) => {
    //         if (event.target === undefined) {
    //             setMeeting({ ...meeting, dateTime: event });
    //         }
    //         else {
    //             setMeeting({ ...meeting, [event.target.name]: event.target.value });
    //         }
    //         console.log(event)
    //         console.log(meeting)
    //     };

    const validateForm = (newMeeting) => {
        const requiredFields = ['name', 'phone', 'email', 'dateTime'];
        const isValid = requiredFields.every(field => newMeeting[field]);
        setIsFormValid(isValid);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleUpdate = () => {
        addMeeting(meeting);
        setMeeting({});
        handleClose();
    };

    return (
        <>
            <div>
                <Dialog open={props.open} onClose={handleClose}>
                    <DialogTitle>ADD MEETING</DialogTitle>
                    <DialogContent>
                        <FormControl required sx={{ m: 1, minWidth: 224 }}>
                            <InputLabel id="demo-simple-select-required-label">Type Of Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required-label"
                                // value={meeting.typeService}
                                value={typeService}
                                label="Type Of Service*"
                                onChange={handleChange}
                            >
                                <MenuItem value="סירוק">
                                    <em>סירוק וחפיפת פאה</em>
                                </MenuItem>
                                <MenuItem value="תסרוקת">
                                    <em> תסרוקת לכלה </em>
                                </MenuItem>
                                <MenuItem value="תפירה">
                                    <em> תפירת פאה חדשה</em>
                                </MenuItem>
                                <MenuItem value="קניה">
                                    <em> קניית פאה חדשה</em>
                                </MenuItem>
                                {/* <MenuItem value={סירוק}>סירוק וחפיפת פאה</MenuItem>
                                <MenuItem value={תסרוקת}>תסרוקת לכלה</MenuItem>
                                <MenuItem value={תפירה}> תפירת פאה חדשה</MenuItem>
                                <MenuItem value={קניה}> קניית פאה חדשה</MenuItem> */}
                            </Select>

                        </FormControl>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={meeting.name}
                            onChange={handleMeetingChange}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="phone"
                            name="phone"
                            label="phone"
                            type="tel"
                            fullWidth
                            variant="standard"
                            value={meeting.phone}
                            onChange={handleMeetingChange}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="email"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={meeting.email}
                            onChange={handleMeetingChange}
                        />
                        {/* {props.failed ? (
                            <>
                                <strong>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            id="dateTime1"
                                            name="dateTime1"
                                            value={meeting.dateTime1}
                                            onChange={handleMeetingChange}
                                        />
                                    </LocalizationProvider>
                                </strong>
                                <p style={{ color: 'red' }}>There was an error. Please choose new date and time.</p>
                            </>
                        ) : (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    id="dateTime1"
                                    name="dateTime1"
                                    value={meeting.dateTime1}
                                    onChange={handleMeetingChange}
                                />
                            </LocalizationProvider>
                        )} */}

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                id="dateTime1"
                                name="dateTime1"
                                value={meeting.dateTime1}
                                onChange={handleMeetingChange}
                            />
                        </LocalizationProvider>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleUpdate} disabled={!isFormValid}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div >
        </>
    );
});

export default AddMeeting;
