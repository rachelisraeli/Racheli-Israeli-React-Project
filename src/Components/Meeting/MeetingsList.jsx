import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { isToday, isThisWeek, format } from 'date-fns';
import { useEffect } from 'react';
import { getMeetings } from '../../store/server.js';

const MeetingsList = (observer(() => {

    console.log(dataStore.meetings);

    useEffect(() => {
        getMeetings();
    }, []);

    return (
        <>
            {dataStore.meetings.map((meeting, index) => {
                const meetingDate = new Date(meeting.dateTime);
                let backgroundColor = 'green'; // ירוק לפגישות בעתיד

                if (isToday(meetingDate)) {
                    backgroundColor = 'red'; // אדום לפגישות ביום הנוכחי
                } else if (isThisWeek(meetingDate)) {
                    backgroundColor = 'orange'; // כתום לפגישות במהלך השבוע
                }
                
                return <><Card key={index} sx={{ maxWidth: 300 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {meeting.typeService}      </Typography>
                        <Typography variant="h5" component="div">
                            {meeting.name}      </Typography>
                        <Typography variant="body2">
                            {meeting.phone}      <br />
                        </Typography>
                        <Typography variant="body2">
                            {meeting.email}      <br />
                        </Typography>
                        <Typography variant="body2">
                            {meeting.dateTime}      <br />
                        </Typography>
                    </CardContent>
                </Card>
                </>
            })}
        </>
    )
}))

export default MeetingsList
