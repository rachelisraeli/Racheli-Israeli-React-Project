import BusinessData from '../BusinessData/BusinessData'
import ServiceList from '../Services/ServicesList'

function UserHome() {

    return (
        <div style={{ backgroundColor: 'green' }}>
            <BusinessData isAdmin={false} />
            <br />
            <br />
            <ServiceList isAdmin={false} />
        </div>
    )
}

export default UserHome
