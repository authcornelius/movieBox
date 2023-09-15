import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' 
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import axios  from 'axios';

function App() {  
  const [cards, setCards] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzU2OTBlODZmNTZjZGVjM2FhZjA0M2U5NGYxMGFlOSIsInN1YiI6IjY1MDFmZGYyMWJmMjY2MDBjNWQ2OGZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pbi3FcbSkFVRgG1AgmhhbjqrKBispj5oppI9NGNKa-U'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setCards(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
      }, [])

    const currentYear = new Date().getFullYear();

  const cardsLists = setCards && (
cards.map(card => <Card poster_path={card.poster_path} release_date={card.release_date} title={card.title} />
  ))

  return (
    <div className='App'>  
      <div className='header'>
        <Navbar />
      </div>

      <div className='container'>
        <div className='row'>
          {cardsLists}
        </div>
      </div>

    </div>
  )
}
export default App