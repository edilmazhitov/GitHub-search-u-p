import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";
import {useLayoutEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Repositories = () => {
    const token = localStorage.getItem('token'); // вот здесь получаем токен
    const [repositories, setRepositories] = useState([]);
    const [repositoriesFilter, setRepositoriesFilter] = useState([]);

    useLayoutEffect(() => {
        axios.get('https://api.github.com/user/repos', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setRepositories(response.data);
                setRepositoriesFilter(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (!token) {
        return <Navigate to='/'/>;
    }

    const showAllRepositories = () => {
        setRepositoriesFilter(repositories);
    };

    const showPublicRepositories = () => {
        const publicRepositories = repositories.filter(rep => !rep.private);
        setRepositoriesFilter(publicRepositories);
    };

    const showPrivateRepositories = () => {
        const privateRepositories = repositories.filter(rep => rep.private);
        setRepositoriesFilter(privateRepositories);
    };

    return (
        <>
            <h1 className="repositories__title">Ваши Репозитории</h1>
            <main className="main">
                <section className="repositories">
                    <div className="container">
                        <div className="repositories__block">
                            <div className="repositories__type-box">
                                <button className="repositories__btn" onClick={showAllRepositories}>Все</button>
                                <button className="repositories__btn" onClick={showPublicRepositories}>Открытые</button>
                                <button className="repositories__btn" onClick={showPrivateRepositories}>Закрытые</button>
                            </div>
                            <RepositoriesList repositories={repositoriesFilter}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Repositories;
