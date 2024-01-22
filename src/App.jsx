import './App.css'
import ServiceList from './Components/Services/ServicesList'
import AddService from './Components/Services/AddService'
import Login from './Components/Admin/Login'
import Meeting from './Components/Meeting/Meeting'
import MeetingList from './Components/Meeting/MeetingsList'
import AddMeeting from './Components/Meeting/AddMeeting'

function App() {

  return (
    <>
      Meeting
      <br />
      <br />
      <Meeting />
      <br />
      <br />
      <MeetingList />
      <br />
      <br />
      Login
      <br />
      <br />
      <Login />
      <br />
      <br />
      Service
      <br />
      <br />
      <AddService />
      <br />
      <br />
      <ServiceList />

    </>
  )
}

export default App
