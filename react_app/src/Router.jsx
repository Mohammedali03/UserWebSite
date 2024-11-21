import {createBrowserRouter  } from "react-router-dom";
import Users from "./views/Users";
import NotFound from "./views/NotFound";

import Online from "./views/Online";
import Offline from "./views/Offline";
import Login from "./views/Login";
import SignUp from "./views/signup";


const router = createBrowserRouter([
{
    path:'/Login',
    element: <Login/>
},
{
    path:'/SignUp',
    element: <SignUp/>
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