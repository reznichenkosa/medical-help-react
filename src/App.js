import './sass/style.scss';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Cabinet from './pages/Cabinet';
import Header from './components/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Page404 from './pages/Page404';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './HOC/AuthProvider';
import RequireAuth from './HOC/RequireAuth';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

  return (
    <AuthProvider>
        <Header setShowModal={setShowModal}/>

        <main id="main">
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<Home setShowModal={setShowModal}/>} />
                <Route path='/cabinet' element={<RequireAuth><Cabinet /></RequireAuth>} />
                <Route path='/contacts' element={<Contacts />} />   
                <Route path='*' element={<Page404 />} />   
            </Routes>
        </AnimatePresence>

        </main>

        <AnimatePresence>
          {showModal && <Modal key="modal" setShowModal={setShowModal}/>}
        </AnimatePresence>
    </AuthProvider>
    
  );
}

export default App;
