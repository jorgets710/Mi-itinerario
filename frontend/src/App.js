import React, { useEffect } from 'react';

import { actionType } from './reducer';
import { useStateValue } from './StateProvider';

import "./app.css";
import Home from './components/Home/index';
import Cities from './components/Cities/indext';
import SingUp from './components/singUp/index';
import SingIn from './components/singIn/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Infocities from './components/Cities/InfoCities/indext'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {

  const [{ cities }, dispatch] = useStateValue()
  // const [{ itineraries }, dispatch] = useStateValue()
  // axios.get("https://restcountries.com/v3.1/all")
  //   .then(response => {
  //     var busquedaPais = response.data.filter(pais => pais.name.common == "New Zealand")
  //     console.log(busquedaPais)
  //     var busquedaContienentes = response.data.filter(continente => continente.continents == "Europe")
  //     console.log(busquedaContienentes)
  //   })
  


  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })
      })
    // clase 17/03

    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      axios.get("http://localhost:4000/api/signtoken", {

        headers: { "Authorization": "Bearer " + token } // metodo de autorizacion/autoidentificacion standar 
      })
        .then(user => {
          
          if (user.data.sucess) {
            
            dispatch({
              type: actionType.USER,
              user: user.data
            })

          } else {
            localStorage.removeItem("token")
          }
        })

    }

  },[])

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>

        <Route path="/cities" element={<Cities />} >
        </Route>

        <Route path="/singUp" element={<SingUp />}>
        </Route>

        <Route path="/singIn" element={<SingIn />}>
        </Route>

        <Route path="/infoCities/:id" element={<Infocities />}>
        </Route>

      </Routes>
      <Footer />
      

    </BrowserRouter>
  );
}

export default App;
