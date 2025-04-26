import {useLayoutEffect, useState} from "react";
import axios  from "axios";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    // const [tab, setTap] = useState("public");

    const token = localStorage.getItem('token');

    useLayoutEffect(() => {
        if (token) {
            axios.get('https://api.github.com/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

            axios.get('https://api.github.com/user/repos', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    setRepositories(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [token]);


    if (!user) {
        return <h1>Загрузка профиля...</h1>
    }

    // const publicRepositories = repositories.filter(repositories => !repositories.private);
    // const privateRepositories = repositories.filter(repositories => repositories.filter)

    console.log(user)
    return (
        <>
            <div className='profile'>
                <header className='profile__header'>
                    <h1 className="profile__title">Ваш профиль</h1>
                </header>
                <div className="container">

                    <div className="profile__block">
                        <div className="profile__left">
                            <img src={user.avatar_url} alt="Аватар" aria-label="Аватар" className="profile__image"/>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__fullname title">Ваше имя: <span>{user.name}</span></h1>
                            <div className="profile__line"></div>
                            <h2 className="profile__login title">Ваш логин: <span>{user.login}</span></h2>
                            <div className="profile__line"></div>
                            <h2 className="profile__email title">
                                Ваш
                                эл.почта: <span>{user.email === null ? 'Электронный почта скрыто' : user.email}</span>
                            </h2>
                            <div className="profile__line"></div>
                            <h2 className="profile__company title">Ваше
                                компания: <span>{user.company === null ? 'Компания не указано' : user.company}</span>
                            </h2>
                            <div className="profile__line"></div>
                            <h2 className="profile__location title">Ваше место
                                положение: <span>{user.location === null ? 'Место положение не указано' : user.location}</span>
                            </h2>
                            <div className="profile__line"></div>
                            <h2 className="profile__bio title">Описани
                                профиля: <span>{user.bio === null ? 'Описание нету' : user.bio}</span></h2>
                            <Link className="profile__link" to={user.html_url}>
                                Ссылка на профиль в GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main">
                <section className="repositories">
                    <h1 className="repositories__title">Ваши Репозитории</h1>
                    <div className="container">


                        <div className="repositories__block">
                            <div className="repositories__type-box">
                                <button className="repositories__btn">
                                    Все
                                </button>
                                <button className="repositories__btn">
                                    Открытый достутые
                                </button>
                                <button className="repositories__btn">
                                    Закрытый доступ
                                </button>
                            </div>
                            <div className="repositories__list">
                                {
                                    repositories.map((repos) => (
                                        <div className="repositories__list-item" key={repos}>
                                            <div className="repositories__left">
                                                <h1 className='repositories__name'>Название репозитории: <span>{repos.name}.</span></h1>
                                            <h2 className="repositories__information">Доступ: <span style={{color: repos.private ? "red": "green"}}>
                                                    {repos.private ? "Закрытый" : "Открытый"}
                                                </span>
                                            </h2>
                                            <h3 className="repositories__description">
                                                Описание: <span>{repos.description ? repos.description : 'Нет описание'}</span>
                                            </h3>
                                            </div>
                                            <div className="repositories__right">
                                                <h2 className="repositories__owner">
                                                    Владелец: <span>{repos.owner.login}.</span> <br/>
                                                    <a href={repos.owner.url}>Ссылка на владельца</a>
                                                </h2>
                                                <Link className='repositories__link' to={repos.html_url}>Ссылка на репозиторию</Link>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
};

export default Profile;