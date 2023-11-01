import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom/';


export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <div className="saved-movie">
          <NavLink to={`/filmler/${movie.id}`}>
        {movie.title}</NavLink></div>
      ))}
      <button className="home-button" onClick={()=> {history.goBack("/")}}>Anasayfa </button>
    </div>
  );
      }