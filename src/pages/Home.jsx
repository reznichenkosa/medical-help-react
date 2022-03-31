import React from 'react';
import { Link } from 'react-router-dom';
import PagesTransition from '../components/PagesTransition';
import { useAuth } from '../hooks/useAuth';

import headphones from '../icons/headphones.svg';
import heart from '../icons/heart.svg';
import history from '../icons/history.svg';

const Home = ({setShowModal}) => {
    const {isLogin} = useAuth();

    return (
        <PagesTransition>
            <section className="home">
                <div className="container">
                    <div className="home__wrapper">
                        <h1 className="home__title title">Место для получения медицинской помощи</h1>
                        <div className="home__btns">
                            {!isLogin ? <button onClick={() => setShowModal(true)} className="home__btn btn btn_primary">Войти</button> :
                            <Link to="/cabinet" className="home__btn btn btn_primary">Кабинет</Link>}
                            <Link to='/contacts' className="home__btn btn">Контакты</Link>
                        </div>
                        <div className="home__services">
                            <div className="home__service">
                                <div className="home__service-icon">
                                    <img src={heart} alt="heart"/>
                                </div>
                                <h5 className="home__service-title">Онлайн-прием</h5>
                                <span className="home__service-desc">Рыба текст</span>
                            </div>
                            <div className="home__service">
                                <div className="home__service-icon">
                                    <img src={headphones} alt="headphones"/>
                                </div>
                                <h5 className="home__service-title">Экстренный Случай</h5>
                                <span className="home__service-desc">Рыба текст</span>
                            </div>
                            <div className="home__service">
                                <div className="home__service-icon">
                                    <img src={history} alt="history"/>
                                </div>
                                <h5 className="home__service-title">Лечение рака</h5>
                                <span className="home__service-desc">Рыба текст</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PagesTransition>
    );
};

export default Home;