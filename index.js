import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './search';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ShowBooks from './components/ShowBooks/Showbooks';
import Bookdetails from './components/Bookdetails/Bookdetails';

// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="books" element={<ShowBooks/>} />
        <Route path="/:id" element={<Bookdetails />} />
        </Routes>
        </BrowserRouter>
    </AppProvider>
);


