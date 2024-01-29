import * as React from 'react';
// import { TextField } from '@mui/material';
import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import { addService } from '../../store/server.js';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
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
                    <AddIcon fontSize="large" color="success"/>
                </IconButton>
                <Button variant="contained" startIcon={<AddIcon />}>
                    Add
                </Button>
            </Stack> */}

            < Button variant="contained" onClick={handleClickOpen} > Add Service </Button >
            <AddService buttonOpen={buttonOpen} setButtonOpen={setButtonOpen} />
            {/* <Dialog open={buttonOpen} onClose={handleClose}>
                <DialogTitle>Edit details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="id"
                        name="id"
                        label="id"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={service.id || ''}
                        onChange={handleServiceChange}
                    />
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
                        value={service.name || ''}
                        onChange={handleServiceChange}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="description"
                        name="description"
                        label="description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={service.description || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="price"
                        name="price"
                        label="price"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={service.price || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="duration"
                        name="duration"
                        label="duration"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={service.duration || ''}
                        onChange={handleServiceChange}
                    />
                    <br />
                    <br />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSaveClick}>Add</Button>
                </DialogActions>
            </Dialog> */}
        </>
    )
}
))

export default Service