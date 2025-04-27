import { Link } from 'react-router-dom';

const UserInterface = ({userData}) => {
    return (
        <>
            {userData && (
                <div className="user-interface">
                    <div className="user-interface__block">
                        <div className="user-interface__right">

                            <img src={userData.avatar_url} className='user-interface__avatar' alt="avatar"/>
                            <h2 className="user-interface__fullname">Имя: <span>{userData.name}</span></h2>
                            <h2 className="user-interface__login">Login: <span>{userData.login}</span></h2>
                        </div>
                        <div className="user-interface__left">
                            <p className="user-interface__followers">Подписчиков: <span>{userData.followers}</span></p>
                            <p className="user-interface__repositories">Репозитории: <span>{userData.public_repos}</span></p>
                            <a href={userData.html_url} target="_blank" rel="noreferrer" className="user-interface__go-to-github">Перейти в профиль <br/> на GitHub'e</a> <br/>
                            <Link  to={`/user-repositories/${userData.login}`} className="user-interface__go-to-github">Простмотрет репозитории</Link>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default UserInterface;