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
        .get('http://localhost:5001/api/filmler')
        .then(response => {
          
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
    if(!saved.find((m)=> m.id==movie.id)){
   setSaved([...saved,movie]);}
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
            <Route path="/filmler/:id" exact >
              <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
