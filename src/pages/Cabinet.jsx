import React from 'react';
import { Link } from 'react-router-dom';
import PagesTransition from '../components/PagesTransition';
import { useAuth } from '../hooks/useAuth';

const Cabinet = () => {

    const {user, signOut} = useAuth();

    return (
        <PagesTransition>
            <section className="cabinet">
                <div className="container">
                    <div className="cabinet__wrapper">
                        <h2 className="cabinet__title title">Привет, {user}</h2>
                        <div className="cabinet__btns">
                            <button onClick={signOut} className="cabinet__btn btn btn_primary">Выйти из аккаунта</button>
                            <Link to='/contacts' className="cabinet__btn btn">Перейти в контакты</Link>
                        </div>
                    </div>
                </div>
            </section>
        </PagesTransition>
    );
};

export default Cabinet;