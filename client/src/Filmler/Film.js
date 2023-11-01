import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Film(props) {
  const [movie, setMovie] = useState();
  const {KaydedilenlerListesineEkle}=props;

  const {id} = useParams();
  

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) 
      .then(response => {
          
          setMovie(response.data);
       
      })
      .catch(error => {
        console.error(error);
      });
    
  }, [id]);

  
  // const filmiKaydet = evt => { }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <button className="save-button" onClick={()=> KaydedilenlerListesineEkle(movie)}>Kaydet</button>
    </div>
  );
}

