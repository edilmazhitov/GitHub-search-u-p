


const Login = () => {

    const client_id = 'Ov23liq0kZ1axDbfzfWH';
    const handleLogin = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:5173/callback&scope=user,repo`;
    }
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={handleLogin}>Войти с помощью GitHub</button>
        </div>
    );
};

export default Login;