import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "../User/UserHome";
import AdminHome from "../Admin/AdminHome";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <UserHome />,
            // errorElement: 
        },
        {
            path: "/admin",
            element: <AdminHome />,
            // errorElement: 
        }
    ])

    return (
        <RouterProvider router={router} />
    )

}

export default Router