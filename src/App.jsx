import './App.css';
import ServiceList from './Components/Services/ServicesList';
import Login from './Components/Admin/Login';
import Meeting from './Components/Meeting/Meeting';
import MeetingsList from './Components/Meeting/MeetingsList';
import Service from './Components/Services/Service';
import BusinessData from './Components/BusinessData/BusinessData';
import AdminHome from './Components/Admin/AdminHome';
import UserHome from './Components/User/UserHome';
import { Router } from 'react-router-dom';
import AddService from './Components/Services/AddService';
import EditBusinessData from './Components/BusinessData/EditBusinessData';
import BusinessDisplay from './Components/BusinessData/BusinessDisplay';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserHome />,
      // errorElement: 
    },
    {
      path: "/admin",
      element: <AdminHome />,
      // element: <Login />,
      // errorElement: 
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
      {/* <Router /> */}
      {/* <Router />
      Login
      <br />
      <br />
      <Login />
      <br />
      <br />
      Meeting
      <br />
      <br />
      <Meeting />
      <br />
      <br />
      <MeetingsList />
      <br />
      <br />
      Service
      <br />
      <br />
      <Service />
      <br />
      <br />
      <AddService />
      <br />
      <br />
      <ServiceList />
      <br />
      <br />
      פרטי העסק
      <br />
      <br />
  <Login />*/}

      <Login />
      <br />
      <br />
      <br />
      <AdminHome />
      <br />
      <br />
      <br />
      <UserHome />
      <br />
      <br />
      <Meeting />
    </>
  )
}

export default App
