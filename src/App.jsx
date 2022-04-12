import React from 'react';
import './App.css';
import FetchApi from './Components/fetchApi';
import Navbar from './Components/Navbar';
import Corusel from './Components/Corousel'
import CoruselBrand  from './Components/Corusel_Brand';
export default function App() {


  return (
    <>
    <Navbar />
    <Corusel />
    <CoruselBrand />
     <FetchApi />
    </>
  );
}
