import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import { addMeeting } from '../../store/server.js';

const AddMeeting = (observer((props) => {

    // const [meeting, setMeeting] = useState({});

    // const handleMeetingChange = (event) => {
    //     setMeeting({ ...meeting, [event.target.id]: event.target.value });
    // };

    const handleAddClick = () => {
        addMeeting(props.meet);
    };

    // const handleSaveClick = () => {
    //     addMeeting(props.meet);
    // };

    // const handleSaveClick = () => {
    //     addMeeting(meet);
    // };
    
    return (
        <>
            <Button variant="contained" onClick={handleAddClick}>Add Meeting</Button>
            {/* <Button variant="contained" onClick={() => addMeeting(meeting)}>Add Meeting</Button> */}
        </>
    )
}))

export default AddMeeting
