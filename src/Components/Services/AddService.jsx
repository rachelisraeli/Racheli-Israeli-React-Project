import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import { addService } from '../../store/server.js';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const AddService = (observer((props) => {

    const handleClickOpen = () => {
        setButtonOpen({ service: props.service });
    };

    const handleClose = () => {
        props.setButtonOpen(false);
    };

    const [service, setService] = useState({});

    const handleServiceChange = (event) => {
        setService({ ...service, [event.target.name]: event.target.value });
        console.log(event)
        console.log(service)
    };

    const handleSaveClick = () => {
        addService(props.service);
    };

    return (
        <>
            <br />
            <br />
            {/* <Button variant="contained" onClick={handleSaveClick}>Add Service</Button> */}
            <Dialog open={props.buttonOpen} onClose={handleClose}>
                <DialogTitle>ADD SERVICE</DialogTitle>
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
            </Dialog>
        </>
    )
}))

export default AddService
