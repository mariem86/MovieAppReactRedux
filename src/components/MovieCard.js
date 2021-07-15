import React from 'react';
import { Link } from 'react-router-dom';
import EditMovie from './EditMovie';
import Rate from './Rate';
import { useDispatch, useSelector } from "react-redux"
import {removeMovie} from "../js/action/Action"

const MovieCard = ({ movie: {id, rating,date, image, name, description } }) => {
  const dispatch = useDispatch()
  const deleteMovie=()=>{
    dispatch(removeMovie(id))
  }
 
  return (
    <div className='container'>
      <div className='movie'>
     
        <div className='movie-rating'>
          <Rate rating={rating} />
        </div>
     
        <div className='movie-img'>
          <img src={image} alt='movie poster' />
        </div>
        <div className='text-movie-cont'>
          <div className='mr-grid'>
            <div className='col1'>
              <h2>{name}</h2>
              <ul className='movie-gen'>
                <p>{date}</p>
              </ul>
            </div>
          </div>
          <div className='mr-grid summary-row'>
            <h5>SUMMARY</h5>
            <Link to={`/description/${id}`} >Read discription of this movie</Link>
            <p>{description}</p>
          </div>
          <div className='mr-grid action-row'>
            <div className='col2'>
          
              <div className='watch-btn' onClick={ deleteMovie}>
               Delete
              </div>
             
            </div>
            <div>
            <button className= "watch-btn"  ></button>
            <EditMovie id={id} names={name} rate={rating} img={image} dates={date}  desc={description} />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

