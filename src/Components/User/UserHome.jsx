import BusinessData from '../BusinessData/BusinessData'
import ServiceList from '../Services/ServicesList'

function UserHome() {

    return (
        <div style={{backgroundColor:'green'}}>
            LOGO
            <BusinessData isAdmin={false}/>
            <br />
            <br />
            <ServiceList />
        </div>
    )
}

export default UserHome
