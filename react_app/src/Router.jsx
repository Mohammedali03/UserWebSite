import {createBrowserRouter  } from "react-router-dom";
import Users from "./views/Users";
import NotFound from "./views/NotFound";

import Online from "./views/Online";
import Offline from "./views/Offline";
import Login from "./views/Login";
import SignUp from "./views/signup";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children : [
            {
                path:'/Dashboard',
                element: <Dashboard/>
            },
            {
                path:'/Users',
                element: <Users/>
            }
        ]
    },
 {
     path:'/',
     element: <GuestLayout/>,
     children : [
        {
            path:'/Login',
            element: <Login/>
        },
        {
            path:'/SignUp',
            element: <SignUp/>
        }
     ]
 },



{
    path:'*',
    element: <NotFound/>
}
]) 
export default router;