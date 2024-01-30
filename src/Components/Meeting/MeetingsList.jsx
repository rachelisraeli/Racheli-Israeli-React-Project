import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { getMeetings } from '../../store/server.js';

const MeetingsList = (observer(() => {

    console.log(dataStore.meetings);

    useEffect(()=>{
        getMeetings();
    }, []);

    return (
        <>
            {dataStore.meetings.map((meeting, index) => {
                return <><Card key={index} sx={{ maxWidth: 300 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {meeting.name}      </Typography>
                        <Typography variant="body2">
                            {meeting.phone}      <br />
                        </Typography>
                        <Typography variant="body2">
                            {meeting.email}      <br />
                        </Typography>
                        <Typography variant="body2">
                            {meeting.dateTime1}      <br />
                        </Typography>
                    </CardContent>
                </Card>
                </>
                // return <div key={index}>
                //     name: {meeting.name},&nbsp;&nbsp;
                //     <br />
                //     <br />
                //     phone: {meeting.phone},&nbsp;&nbsp;
                //     email: {meeting.email},&nbsp;&nbsp;
                //     dateTime: {meeting.dateTime1}
                //     <br />
                //     <br />
                // </div>
            })}
        </>
    )
}))

export default MeetingsList
