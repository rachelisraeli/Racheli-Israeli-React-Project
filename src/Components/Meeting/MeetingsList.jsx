import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';

const MeetingList = (observer(() => {

    console.log(dataStore.meetings);

    return (
        <>
            {dataStore.meetings.map((meeting, index) => {
                return <div key={index}>{meeting.name}</div>
            })}
        </>
    )
}))

export default MeetingList
