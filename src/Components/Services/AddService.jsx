import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { addService } from '../../store/server.js';

const AddService = (observer(() => {

    const [name, setName] = useState('');

    return (
        <>
            <TextField id="name" label="serviceName" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <Button variant="contained" onClick={() => addService({ name })}>Add Service</Button>
        </>
    )
}))

export default AddService
