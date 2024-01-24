import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';

const ServiceList = (observer(() => {

    console.log(dataStore.services);

    return (
        <>
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
        </>
    )
}))

export default ServiceList