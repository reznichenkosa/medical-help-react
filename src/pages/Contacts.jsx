import React from 'react';
import PagesTransition from '../components/PagesTransition';

const Contacts = () => {
    return (
        <PagesTransition>
            <section className="contacts">
                <div className="container">
                    <div className="contacts__wrapper">
                        <h2 className="contacts__title title">Контакты</h2>
                    </div>
                </div>
            </section>
        </PagesTransition>
    );
};

export default Contacts;