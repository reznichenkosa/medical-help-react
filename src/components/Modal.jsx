import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Modal = ({setShowModal}) => {

    const {signIn} = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        signIn(name, password,
            () => {
            setShowModal(false);
            navigate('/cabinet')},
            () => {
                setMessage('Не верные данные!');
                setTimeout(() => setMessage(''), 3000);
            }
        ); 
    }

    return (
            <motion.div transition={{duration: .3}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="popup" data-modal>
                <div className="popup__dialog">
                    <div className="popup__content">
                        <span onClick={() => setShowModal(false)} className="popup__close">&times;</span>
                        <form onSubmit={handleForm}>
                            <label>
                                Логин:
                                <input minLength="3" onChange={(e) => setName(e.target.value)} value={name} type="text" name="login"/>
                            </label>
                            <label>
                                Пароль:
                                <input minLength="8" onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password"/>
                            </label>
                            <div>{message}</div>
                            <button className="popup__btn btn">Войти</button>
                        </form>
                    </div>
                </div>
            </motion.div>
    );
};

export default Modal;