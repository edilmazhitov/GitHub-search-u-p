import token from '../Profile/Profile'
import {Navigate} from "react-router-dom";

const Login = () => {

    const client_id = 'Ov23liq0kZ1axDbfzfWH';
    const handleLogin = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:5173/callback&scope=user,repo`;
    }

    if (token === true) {
        return <Navigate to='/profile' />
    }

    return (
        <div className='login'>
            <div className="container">
                <div className="login__block">
                    <h1 className="login__title">Авторизация</h1>
                    <p className="login__subtitle">
                        Войдите аккаунт через GitHub. <br/>
                        Чтобы смотреть репозитории.
                    </p>
                    <button className="login__btn" onClick={handleLogin}>Войти с помощью GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;