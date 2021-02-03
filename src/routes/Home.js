import React, { useEffect, useState } from 'react';
import axois from 'axios';
import Movie from '../components/Movie'
import './Home.css'

function Home() {
  let [loading, loadingModify] = useState({
    isLoading : true,
    movies : []
  })
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
        : (
            <div className="movies">
              {loading.movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          )}
    </section>
    );
}

export default Home;
