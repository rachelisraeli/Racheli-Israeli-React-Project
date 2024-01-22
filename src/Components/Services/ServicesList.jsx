import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';

const ServiceList = (observer(() => {

    console.log(dataStore.services);
    
    return (
        <>
            {dataStore.services.map((service, index) => {
                return <div key={index}>{service.name}</div>
            })}
        </>
    )
}))

export default ServiceList
