import * as React from 'react';
import { observer } from 'mobx-react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import AddMeeting from './AddMeeting.jsx';
import Alert from '@mui/material/Alert';
import dataStore from '../../store/store.js';

const Meeting = (observer((props) => {

    const [open, setOpen] = useState(false);
    // const [openAlert, setOpenAlert] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        // setOpenAlert(true);
    };

    // const handleClose = () => {
    //     setOpenAlert(false);
    // }

    return (
        <>
            <ThemeProvider theme={theme}>

                <Button variant="contained" onClick={handleClickOpen} color='primary' >Add meeting</Button>
                <AddMeeting open={open} failed={true} setOpen={setOpen} />
                <br />

                {/* {dataStore.isAddMeeting ? alert("The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :)") : null} */}

                {/* {open && dataStore.isAddMeeting ?
                    <Alert severity="success" onClose={() => dataStore.isAddMeeting = false}> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> : null}
                {open && !dataStore.isAddMeeting ?
                    <Alert severity='error' onClose={() => dataStore.isAddMeeting = false}>It is not possible to make an appointment at this time, Please choose other time</Alert> : null} */}

                {/* {dataStore.isAddMeeting ?
                        <Alert severity="success" onClose={handleClose}> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> :
                        <AddMeeting open={open} setOpen={setOpen} />
                        // <AddMeeting open={open} failed={true} setOpen={setOpen} openAlert={openAlert} />
                    } */}

                {/* {open && dataStore.isAddMeeting ?
                        <Alert severity="success" onClose={handleClose}> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> :
                        <>
                            <Alert severity='error' onClose={handleClose}>It is not possible to make an appointment at this time, Please choose other time</Alert>
                            <AddMeeting open={open} setOpen={setOpen} />
                        </>
                        // <AddMeeting open={open} failed={true} setOpen={setOpen} openAlert={openAlert} />
                    } */}

            </ThemeProvider >
        </>
    );
}))

export default Meeting;