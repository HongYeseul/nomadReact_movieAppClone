import React, { useEffect, useState } from 'react';
import axois from 'axios';
import Movie from './Movie';
import './App.css'

function MakeLoading({loading, loadingModify}){
  let getMovies = async () =>{
    const {
      data : {
        data : {movies},
      },
    } = await axois.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    loadingModify({movies, isLoading:false})
  }
  useEffect(()=>{
    getMovies()
  });
  return (
    <section className="container">
      {
        loading.isLoading 
        ?<div className="loader"> <span className="loader__text">"Loading..." </span> </div> 
        : loading.movies.map((movie) =>{
          return (
          <div className="movies">
            {<Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title={movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
          />}
          </div>
          );
        })
      }
    </section>
    );
}

function App() {
  let [loading, loadingModify] = useState({
    isLoading : true,
    movies : []
  })
  

  return (
    <div>
      <MakeLoading loading={loading} loadingModify={loadingModify}/>
    </div>
  );
}

export default App;
