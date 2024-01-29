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

const AddMeeting = (observer((props) => {

    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen({ meet: props.meet });
    // };

    const handleClose = () => {
        props.setOpen(false);
    };

    const [meeting, setMeeting] = useState({});

    const [typeService, setTypeService] = useState('');

    const handleChange = (event) => {
        setTypeService(event.target.value);
    };

    const handleMeetingChange = (event) => {
        if (event.target === undefined) {
            setMeeting({ ...meeting, dateTime: event });
        }
        else {
            setMeeting({ ...meeting, [event.target.name]: event.target.value });
        }
        console.log(event)
        console.log(meeting)
        // setMeeting({ ...meeting, [event.target.id]: event.target.value });
    };

    // const handleAddClick = () => {
    //     console.log(props.meet)
    //     addMeeting({ ...props.meet });
    // };

    const handleUpdate = () => {
        console.log("handleAddClickmeet", meeting)
        addMeeting({ meeting });
    };

    return (
        <>
            {/* <Button variant="contained" onClick={handleAddClick}>Add Meeting</Button> */}
            <div>
                <Dialog open={props.open} onClose={handleClose}>
                    <DialogTitle>ADD MEETING</DialogTitle>
                    <DialogContent>
                        <FormControl required sx={{ m: 1, minWidth: 224 }}>
                            <InputLabel id="demo-simple-select-required-label">Type Of Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required-label"
                                value={typeService}
                                label="Type Of Service*"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>סירוק וחפיפת פאה</em>
                                </MenuItem>
                                <MenuItem value="">
                                    <em> תסרוקת לכלה </em>
                                </MenuItem>
                                <MenuItem value="">
                                    <em> קניית ותפירת פאה חדשה</em>
                                </MenuItem>
                                {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                id="dateTime1"
                                name='selectedDateTime'
                                // value={meet.selectedDateTime}
                                value={meeting.dateTime1}
                                onChange={handleMeetingChange}
                            />
                        </LocalizationProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleUpdate}>Edit</Button>
                    </DialogActions>
                </Dialog>
            </div>
            {/* <Button variant="contained" onClick={() => addMeeting(props.meet)}>Add Meeting</Button> */}
            {/* <Button variant="contained" onClick={() => addMeeting(meeting)}>Add Meeting</Button> */}
        </>
    )
}))

export default AddMeeting