import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";

const UserRepositories = () => {
    const { username } = useParams();
    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepositories(res.data);
                setError('');
            } catch (e) {
                const errorMessage = e.response ? e.response.data.message : e.message;
                setError(errorMessage || 'Ошибка при загрузке репозиториев');
            }
        };

        fetchRepositories();
    }, [username]);

    return (
        <div className="repositories-page">
            <h1>Репозитории пользователя: {username}</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <RepositoriesList repositories={repositories} />
        </div>
    );
};

export default UserRepositories;
