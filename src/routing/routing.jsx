import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Callback from "../pages/Callback/Callback.jsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
      path: "callback",
      element: <Callback />
    },
    {
        path: 'profile',
        element: <Profile />
    }
])

export default router;