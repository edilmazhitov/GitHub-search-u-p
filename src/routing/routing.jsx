import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Callback from "../pages/Callback/Callback";
import Repositories from "../pages/Repositories/Repositories";
import Layout from "../Layout/Layout";
import UserRepositories from "../pages/UserRepositories/UserRepositories";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/callback",
                element: <Callback />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/repositories',
                element: <Repositories />
            },
            {
                path: '/user-repositories/:username',
                element: <UserRepositories />
            }
        ]
    }

])

export default router;