import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import logo from '../images/logo.svg';

const Header = ({setShowModal}) => {
    const {isLogin, signOut} = useAuth();

    return (
        <header className="header">
          <div className="container">
              <div className="header__wrapper">
                  <Link to="/" className="header__logo">
                      <img src={logo} alt="logo"/>
                  </Link>
                  <Link to="/contacts" className="header__contacts" data-link="Контакты">Контакты</Link>
                  {!isLogin ? <button onClick={() => setShowModal(true)} className="header__btn">Войти</button> :
                  <button onClick={signOut} className="header__btn">Выйти</button>}
              </div>
          </div>
      </header>
    );
};

export default Header;