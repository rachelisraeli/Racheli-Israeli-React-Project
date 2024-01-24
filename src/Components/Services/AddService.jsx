import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import { addService } from '../../store/server.js';

const AddService = (observer((props) => {

    // const [name, setName] = useState('');

    const handleSaveClick = () => {
        addService(props.service);
    };

    return (
        <>
            {/* <TextField id="name" label="serviceName" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /> */}
            <br />
            <br />
            <Button variant="contained" onClick={handleSaveClick}>Add Service</Button>

            {/* <Button variant="contained" onClick={() => addService({ name })}>Add Service</Button> */}
        </>
    )
}))

export default AddService
