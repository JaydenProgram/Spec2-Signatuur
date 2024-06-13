import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import LookingBack from './components/LookingBack.jsx';
import SignatureBook from "./components/signatureBook.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/terug-kijken" element={<LookingBack />} />
                <Route path="/book" element={<SignatureBook />} />
            </Routes>
        </Router>
    );
};

export default App;