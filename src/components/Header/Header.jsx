import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import token from '../../pages/Profile/Profile'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__block">
                    <h1 className="header__title">
                        GitHub control
                    </h1>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__list-item">
                                <Link className="header__link" to="/">Главная</Link>
                            </li>
                            <li className="header__list-item">
                                <Link className="header__link" to="/repositories">Репозитории</Link>
                            </li>
                            <li className="header__list-item">
                                <Link className="header__link" to="/profile">Профиль</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link className="header__log-out" to={token === false ? '/login': '/profile'}>
                        <FaGithub className='icon'/> <br/>
                        <span>
                        {
                            token === false ? "Войти" : "Профиль"
                        }
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;