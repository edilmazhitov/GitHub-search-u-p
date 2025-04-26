import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";
import {useLayoutEffect, useState} from "react";
import axios from "axios";
import token from '../Profile/Profile'
import {Navigate} from "react-router-dom";

const Repositories = () => {
    const [repositories, setRepositories] = useState([]);

    useLayoutEffect(() => {
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
    })

    if (!token) {
        return <Navigate to='/'/>
    }

    return (
        <>
            <h1 className="repositories__title">Ваши Репозитории</h1>
            <main className="main">
                <section className="repositories">
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
                            <RepositoriesList repositories={repositories}/>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
};

export default Repositories;