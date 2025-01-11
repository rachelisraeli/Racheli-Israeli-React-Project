import { observer } from 'mobx-react';
import { useEffect } from 'react';
import dataStore from '../../store/store.js';
import Meeting from '../Meeting/Meeting.jsx';
import Service from './Service.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deleteService, getServices } from '../../store/server.js';
import { Button } from '@mui/material';
import './Service.css';

const ServiceList = (observer(({ isAdmin }) => {

    useEffect(() => {
        if (!dataStore.services.length) {
            getServices();
        }
    }, []);

    return (
        <>
            <div className='service-container'>
                {dataStore.services.map((service, index) => {
                    return <><Card key={index} sx={{ maxWidth: 500 }} className='card'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography variant="h6">
                                {service.description} <br />
                            </Typography>
                            <Typography variant="h6">
                                Price:  {service.price} <br />
                            </Typography>
                            {isAdmin ? null : <Meeting />}
                            {isAdmin ? <Button className='deleteButton' variant="contained" color="error" onClick={() => deleteService(service.id)}>Delete</Button> : null}
                        </CardContent>
                    </Card >
                    </>
                })}
            </div>
            {isAdmin ? <Service /> : null}
        </>
    )
}))

export default ServiceList