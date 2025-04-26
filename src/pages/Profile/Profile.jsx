import {useLayoutEffect, useState} from "react";
import axios  from "axios";
import {Link, Navigate} from 'react-router-dom';
import RepositoriesList from "../../components/RepositoriesList/RepositoriesList.jsx";
export  const token = localStorage.getItem('token');
const Profile = () => {
    const [user, setUser] = useState(null);

    // const [tab, setTap] = useState("public");



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


        }
    }, [token]);


    if (!token) {
        return <Navigate to='/'/>
    }
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

        </>

    );
};

export default Profile;