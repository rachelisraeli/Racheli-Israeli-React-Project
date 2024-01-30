import * as React from 'react';
// import { TextField } from '@mui/material';
import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import AddIcon from '@mui/icons-material/Add';
import AddService from './AddService.jsx';

const Service = (observer(() => {

    const [service, setService] = useState({});
    const [buttonOpen, setButtonOpen] = useState(false);

    const handleClickOpen = () => {
        setButtonOpen(true);
    };

    return (
        <>
            {/* <Stack direction="row" spacing={1}>
                <IconButton aria-label="add">
                    <AddIcon fontSize="large" color="success" />
                </IconButton>
                <Button variant="contained" startIcon={<AddIcon />}>
                    Add
                </Button>
            </Stack> */}

            < Button variant="contained" onClick={handleClickOpen} > Add Service </Button >
            <AddService buttonOpen={buttonOpen} setButtonOpen={setButtonOpen} />

        </>
    )
}
))

export default Service