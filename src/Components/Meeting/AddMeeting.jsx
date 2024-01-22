import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { addMeeting } from '../../store/server.js';

const AddMeeting = (observer(() => {

    const [meeting, setMeeting] = useState({});

    const handleMeetingChange = (event) => {
        setMeeting({...meeting,[event.target.id]:event.target.value});
    };

    return (
        <>
            {/* <TextField id="name" label="meetingName" variant="outlined" value={meeting.name} onChange={(e) => handleMeetingChange(e)} />
            <TextField id="phone" label="meetingName" variant="outlined" value={meeting.phone} onChange={(e) => handleMeetingChange(e)} />
            <TextField id="email" label="meetingName" variant="outlined" value={meeting.email} onChange={(e) => handleMeetingChange(e)} />
            <TextField id="selectedDateTime" label="meetingName" variant="outlined" value={meeting.selectedDateTime} onChange={(e) => handleMeetingChange(e)} /> */}
            <br />
            <br />
            <Button variant="contained" onClick={() => addMeeting(meeting)}>Add Meeting</Button>
        </>
    )
}))

export default AddMeeting
