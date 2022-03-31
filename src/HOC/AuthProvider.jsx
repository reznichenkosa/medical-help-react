import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
    const [user, setUser] = useState('');

    useEffect(() => {
        if (isLogin) {
            const login = localStorage.getItem('login');
            console.log(login);
            getData().then(data => setUser(data[login].name));
        }
        // eslint-disable-next-line
    }, []);

    const getData = async () => {
        const response = await fetch('http://localhost:3001/users').then(res => res.json());
        return response;
    }

    const signIn = async (user, password, cb, errorAuthCb) => {

        const data = await getData();

        if (data[user] && data[user].password === password) {
            setUser(data[user].name);
            setIsLogin(true);
            localStorage.setItem('isLogin', true);
            localStorage.setItem('login', user);
            cb();
        } else {
            errorAuthCb();
        }
        
    } 

    const signOut = () => {
        setUser(null);
        setIsLogin(false)
        localStorage.removeItem('isLogin');
        localStorage.removeItem('login');
    }
    const value = {user, isLogin, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};
