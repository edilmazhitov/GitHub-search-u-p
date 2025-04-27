import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import axios from "axios";
import {token} from '../Profile/Profile'
import UserInterface from "../../components/UserInterface/UserInterface.jsx";

const Home = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearchSubmit = async () => {
        if (!username) {
            setError('Пожалуйста, введите имя пользователя.');
            return;
        }

        setError('');
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
            setUserData(res.data);
        } catch (e) {
            setUserData(null);
            const errorMessage = e.response ? e.response.data.message : e.message;
            setError(errorMessage || 'Произошла ошибка при загрузке данных');
        }
    }

    return (
        <>
            <main className="main">
                <section className="global">
                    <div className="container">
                        <h1 className="global__title">
                            GitHub Control — это платформа, <br />
                            где вы можете просматривать свои проекты на GitHub, <br />
                            видеть доступные и недоступные репозитории, а также открытые репозитории других пользователей. <br />
                            Кроме того, доступна функция поиска пользователей и их репозиториев.
                        </h1>
                    </div>
                </section>

                <section className="search-system">
                    <div className="container">
                        <input
                            className='search-system__input'
                            type="search"
                            value={username}
                            placeholder="Поиск пользователя"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button className="search-system__btn" onClick={handleSearchSubmit}>
                            <HiMiniMagnifyingGlass className="icon" />
                        </button>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <UserInterface userData={userData}/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
