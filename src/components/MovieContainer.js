import React,{ useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Addmovie from "./Addmovie"
import Search from './Search';
import MoviesList from './MovieList';
function MovieContainer() {
    /* const [moviesList, setMoviesList] = useState();*/

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const movies = useSelector((state) => state.movieReducer.Data);
 /* const addMovie = (e, newMovie) => {
    e.preventDefault();
    return setMoviesList([...moviesList, newMovie]);
  };*/
    return (
        <div>
            <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
        />  

      <MoviesList
        moviesList={movies}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
        />  
 
        <Addmovie/> 
        </div>
    )
}

export default MovieContainer
