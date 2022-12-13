import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import Navbar from './components/navbar/navbar';
import AboutUs from './components/aboutUs/aboutUs';
import ContactUs from './components/contactUs/contactUs';
import Home from './components/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='contactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
