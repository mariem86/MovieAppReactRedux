import React, { useState } from 'react';

import MovieCard from './MovieCard';
/*import Addmovie from './Addmovie'
import EditMovie from './EditMovie';*/
import { useDispatch, useSelector } from "react-redux";
const MoviesList = ({ moviesList, ratingSearch, nameSearch }) => {

  /*const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [ date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch();

  const addMovies = () => {
    
    dispatch(addMovie({name, rating,image, date,description }));
  
    
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('')};
    const editMovies = ( ) => {
    
      dispatch( editMovie(id,{id, name, rating,image, date,description }));
    
      setEdit(false)
      setName('');
      setRating('');
      setImage('');
      setDate('');
      setDescription('')
      setId(0)
  };
  
const getmovies=(movie)=>{
  
  setName(movie.name)
  setRating(movie.rating)
  setImage(movie.image)
  setDate(movie.date)
  setDescription(movie.description)
  setId(movie._id)
  setEdit(true)

}*/
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesList
        .filter(
          (el) =>
            el.rating >= ratingSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el}  /*getmovies={getmovies}*/ />
        ))}
        < div>
        
        
    </div>
    <div>
  
   </div>
    </div>
   
  );
};

export default MoviesList;