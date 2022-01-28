import React from 'react';
import "./app.css";
import Home from './components/Home/index';
import Cities from './components/Cities/indext';
import SingUp from './components/singUp/index';
import SingIn from './components/singIn/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log(response.data)
      var busquedaPais = response.data.filter(pais => pais.name.common == "Argentina")
      console.log(busquedaPais)
      var busquedaContienentes = response.data.filter(continente => continente.continents == "South America")
      console.log(busquedaContienentes)
    })

  return (
    <BrowserRouter>
    <Navbar/>
    
      
      <Routes>
        <Route path="/" element = {<Home/>}>
        </Route>

        <Route path="/cities" element={<Cities/>}> 
        </Route>

        <Route path="/singUp" element={<SingUp/>}>
          
        </Route>

        <Route path="/singIn" element={<SingIn/>}>
          
        </Route>

      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
