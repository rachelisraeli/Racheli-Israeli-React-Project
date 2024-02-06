import * as React from 'react';
import { observer } from 'mobx-react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import AddMeeting from './AddMeeting.jsx';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import dataStore from '../../store/store.js';

const Meeting = (observer((props) => {

    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setOpenAlert(true);
    };

    const handleClose = () => {
        setOpenAlert(false);
    }

    return (
        <>
            <ThemeProvider theme={theme}>

                <Button variant="contained" onClick={handleClickOpen} color='primary' >Add meeting</Button>
                <AddMeeting open={open} failed={true} setOpen={setOpen} />
                <br />
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {/* {dataStore.isAddMeeting ?
                        alert("The meeting added successfully! & nbsp;&nbsp;&nbsp; See you :) ") :
                        <>
                            {alert("It is not possible to make an appointment at this time, Please choose other time")}
                            <AddMeeting open={open} failed={true} setOpen={setOpen} openAlert={openAlert} />
                        </>
                    } */}
                    {/* {dataStore.isAddMeeting ?
                        <Alert severity="success" onClose={handleClose}> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> :
                        <AddMeeting open={open} failed={true} setOpen={setOpen} openAlert={openAlert} />
                    } */}
                </Stack >
            </ThemeProvider >
        </>
    );
}))

export default Meeting;