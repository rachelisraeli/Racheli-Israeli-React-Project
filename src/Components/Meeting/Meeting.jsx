import * as React from 'react';
import { observer } from 'mobx-react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import AddMeeting from './AddMeeting.jsx';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTimeout } from 'react-use';
import dataStore from '../../store/store.js';

const Meeting = (observer((props) => {

    const [meet, setMeet] = useState({});
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [failed, setFailed] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAlertOpen = () => {
        setOpenAlert(true);

        useTimeout(() => {
            setOpenAlert(false);
        }, 3000);
    }

    return (
        <>
            <ThemeProvider theme={theme}>

                <Button variant="contained" onClick={handleClickOpen} color='primary' >Add meeting</Button>
                <AddMeeting open={open} setOpen={setOpen} />
                <br />
                <Stack sx={{ width: '100%' }} spacing={2}>

                    {dataStore.isAddMeeting ?
                        <Alert severity="success" handleAlertOpen={handleAlertOpen}> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> :
                        <AddMeeting open={open} setOpen={setOpen} />}
                    {/* <AddMeeting open={open} setOpen={setOpen} failed={setFailed} />} */}

                    {/* {dataStore.isAddMeeting ?
                        <Alert severity="success"> The meeting added successfully! &nbsp;&nbsp;&nbsp; See you :) </Alert> :
                        <AddMeeting open={open} setOpen={setOpen} setUpdateError={setUpdateError} />} */}
                </Stack >
            </ThemeProvider >
        </>
    );
}))

export default Meeting;