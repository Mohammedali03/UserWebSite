import {createBrowserRouter  } from "react-router-dom";
import Users from "./views/Users";
import NotFound from "./views/NotFound";

import Online from "./views/Online";
import Offline from "./views/Offline";
import Login from "./views/Login";

const router = createBrowserRouter([
{
    path:'/online',
    element: <Login/>
},
{
    path:'/offline',
    element: <Offline/>
},
{
    path:'/Users',
    element: <Users/>
},
{
    path:'*',
    element: <NotFound/>
}
]) 
export default router;