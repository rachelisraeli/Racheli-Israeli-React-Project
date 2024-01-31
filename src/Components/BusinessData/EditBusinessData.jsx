import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import { observer } from 'mobx-react';
import businessStore from '../../store/BusinessStore.js'


const EditBusinessData = (observer((props) => {

    const [open, setOpen] = useState(false);

    const { business, onUpdateBusiness, handleUpdateBusiness } = props;

    const [editedBusiness, setEditedBusiness] = useState({
        name: business.name,
        address: business.address,
        phone: business.phone,
        owner: business.owner,
        description: business.description,
    });

    useEffect(() => {
        setEditedBusiness({
            name: business.name,
            address: business.address,
            phone: business.phone,
            owner: business.owner,
            description: business.description,
        });
    }, [business]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //batya
    const handleUpdate = (e) => {
        e.preventDefault();
        const detailsToUpdate = { name: newName, address: newAddress, mail: newMail, phone: newPhone };
        businessStore.editDetails(detailsToUpdate);
        handleClose();
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedBusiness((prevBusiness) => ({
            ...prevBusiness,
            [name]: value,
        }));
    };

    // const handleUpdate = () => {
    //     // onUpdateBusiness(editedBusiness);
    //     handleUpdateBusiness(editedBusiness);
    //     handleClose();
    // };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <Button variant="contained" onClick={handleClickOpen}>
                        Edit details
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit details</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={editedBusiness.name}
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="address"
                                name="address"
                                label="address"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={editedBusiness.address}
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="phone"
                                name="phone"
                                label="phone"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={editedBusiness.phone}
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="owner"
                                name="owner"
                                label="owner"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={editedBusiness.owner}
                                onChange={handleChange}
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
                                value={editedBusiness.description}
                                onChange={handleChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleUpdate}>Edit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </ThemeProvider>
        </>
    );
}))

export default EditBusinessData;
