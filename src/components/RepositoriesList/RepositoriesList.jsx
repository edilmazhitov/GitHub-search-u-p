
const RepositoriesList = ({repositories}) => {


    return (
        <div className="repositories-list">
            {
                repositories.map((repos) => (
                    <div className="repositories-list__item" key={repos.id}>
                        <div className="repositories__left">
                            <h1 className='repositories__name'>Название репозитории: <span>{repos.name}.</span></h1>
                            <h2 className="repositories__information">Доступ: <span style={{color: repos.private ? "red" : "green"}}>
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
                                <a href={repos.owner.html_url}>Ссылка на владельца</a>
                            </h2>
                            <a className='repositories__link' href={repos.html_url} target='_blank' >Ссылка на репозиторию</a>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default RepositoriesList;