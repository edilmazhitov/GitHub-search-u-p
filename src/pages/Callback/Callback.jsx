import axios from "axios";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const client_id = 'Ov23liq0kZ1axDbfzfWH';
const client_secret = '0991637d88d119ca55b7c9eeefcfca3629df63df';

const CallbackPage = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");

        if (code) {
            axios.post(
                'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
                {
                    client_id,
                    client_secret,
                    code,
                },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
                .then((response) => {
                    const { access_token } = response.data;

                    if (access_token) {
                        localStorage.setItem('token', access_token);
                        navigate('/profile');
                    } else {
                        alert('Ошибка получения токена');
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert('Ошибка авторизации');
                });
        }
    }, []);

    return <div>Загружаем...</div>;
};

export default CallbackPage;
