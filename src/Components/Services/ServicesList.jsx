import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';
import AddService from './AddService.jsx';
import AddMeeting from '../Meeting/AddMeeting.jsx';
import { Button } from '@mui/material';
import Meeting from '../Meeting/Meeting.jsx';
import Service from './Service.jsx';

const ServiceList = (observer(({isAdmin}) => {

    console.log(dataStore.services);
    console.log(isAdmin)
   
    return (
        <>
            <br />
            <br />
            <br />
            תצוגת רשימת השירותים
            <br />
            <br />
            <br />
            {console.log(dataStore.services)}
            {dataStore.services.map((service, index) => {
                return <div key={index}>
                    id: {service.id},&nbsp;&nbsp;
                    name: {service.name}
                    <br />
                    <br />
                    price: {service.price},&nbsp;&nbsp;
                    description: {service.description},&nbsp;&nbsp;
                    duration: {service.duration}
                    <br />
                    <br />
                </div>
            })}
            {isAdmin ? <Service /> : <Meeting />}
            {/* {isAdmin ?
                <Button variant="contained"> Add new service
                    <br /><br />
                    <Service />
                </Button> :
                <Button variant="contained"> Add new meeting
                    <br /><br />
                    <Meeting />
                </Button>} */}
        </>
    )
}))

export default ServiceList