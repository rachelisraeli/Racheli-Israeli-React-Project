import * as React from 'react';
import { observer } from 'mobx-react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { addMeeting } from '../../store/server.js';
import AddMeeting from './AddMeeting.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';

const Meeting = (observer((props) => {

    const [meet, setMeet] = useState({});
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleMeetChange = (event) => {
    //     if (event.target === undefined) {
    //         setMeet({ ...meet, dateTime: event });
    //     }
    //     else {
    //         setMeet({ ...meet, [event.target.name]: event.target.value });
    //     }
    //     console.log(event)
    //     console.log(meet)
    // };

    //------
    const [typeService, setTypeService] = useState('');

    const handleChange = (event) => {
        setTypeService(event.target.value);
    };
    //------

    // const handleAddClick = () => {
    //     console.log("handleAddClickmeet", meet)
    //     addMeeting({ meet });
    // };

    // const handleUpdate = () => {
    //     console.log("handleAddClickmeet", meet)
    //     addMeeting({ meet });
    // };

    return (
        <>
            <ThemeProvider theme={theme}>

                <Button variant="contained" onClick={handleClickOpen} color='primary' >Add meeting</Button>
                <AddMeeting open={open} setOpen={setOpen} />

                {/* <Dialog open={open} onClose={handleClose}>


                {/* {open && <AddMeeting />} */}

            </ThemeProvider>

            {/* {open && <AddMeeting meet={open.meet} />} */}
            {/* <AddMeeting meet={open.meet} /> */}
            {/* <AddMeeting /> */}

            {/* <DialogTitle>Add meeting</DialogTitle>
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
                                <em>סירוק וחפיפ[ת פאה</em>
                            </MenuItem>
                            <MenuItem value="">
                                <em> תסרוקת לכלה </em>
                            </MenuItem>
                            <MenuItem value="">
                                <em> קניית ותפירת פאה חדשה</em>
                            </MenuItem>

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
                        value={meet.name}
                        onChange={handleMeetChange}
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
                        value={meet.phone}
                        onChange={handleMeetChange}
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
                        value={meet.email}
                        onChange={handleMeetChange}
                    />
                    <br />
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            id="dateTime"
                            name='selectedDateTime'
                            // value={meet.selectedDateTime}
                            value={meet.dateTime}
                            onChange={handleMeetChange}
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Add</Button>
                </DialogActions> */}
            {/* </Dialog> */}
        </>
    );
}))

export default Meeting;
