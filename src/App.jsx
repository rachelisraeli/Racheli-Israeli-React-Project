import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import UserHome from './Components/User/UserHome';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserHome />,
      // errorElement: 
    },
    {
      path: "/admin",
      element: <Admin />,
      // element: <Login />,
      // errorElement: 
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
