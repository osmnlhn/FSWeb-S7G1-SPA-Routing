import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi"
import Film from "./Filmler/Film"

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          // console.log(response.data)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (movie) => {
   
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />
      <div>

        <Router>
          <Switch>
            <Route exact path="/">
              <FilmListesi movies={movieList} />
            </Route>
            <Route path="/filmler/:id" >
              <Film   />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
