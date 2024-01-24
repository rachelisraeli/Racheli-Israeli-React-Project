import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';

const MeetingsList = (observer(() => {

    console.log(dataStore.meetings);

    return (
        <>
            {dataStore.meetings.map((meeting, index) => {
                return <div key={index}>
                    name: {meeting.name},&nbsp;&nbsp;
                    <br />
                    <br />
                    phone: {meeting.phone},&nbsp;&nbsp;
                    email: {meeting.email},&nbsp;&nbsp;
                    dateTime: {meeting.dateTime1}
                    <br />
                    <br />
                </div>
            })}
        </>
    )
}))

export default MeetingsList
