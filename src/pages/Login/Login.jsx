import token from '../Profile/Profile'
import {Navigate} from "react-router-dom";

const Login = () => {

    const client_id = 'Ov23liq0kZ1axDbfzfWH';
    const handleLogin = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:5173/callback&scope=user,repo`;
    }

    if (token) {
        return <Navigate to='/profile'/>
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={handleLogin}>Войти с помощью GitHub</button>
        </div>
    );
};

export default Login;