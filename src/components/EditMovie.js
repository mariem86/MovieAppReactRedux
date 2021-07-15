import React, { useState } from 'react';

import Modal from 'react-modal';
import {editMovie} from "../js/action/Action"

import { useDispatch, useSelector } from "react-redux";

Modal.setAppElement('#root');

const EditMovie = ({id,names,rate,img,dates,desc}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
 
  const [name, setName] = useState(names);
  const [rating, setRating] = useState(rate);
  const [image, setImage] = useState(img);
  const [ date, setDate] = useState(dates);
  const [description, setDescription] = useState(desc);
 // const [id, setId] = useState(0)
  
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
    setName("");
    setRating("");
    setImage("");
    setDate("");
    setDescription("");
  }

 
 /* const oldMovie= (movie)=>{
   setName(movie.name)
  setId(movie.id)
  setRating(movie.rating);
    setImage(movie.image);
    setDate(movie.date);
    setDescription(movie.description)}*/
    
 const editMovies = ( ) => {
    
    dispatch( editMovie(id,{id, name, rating,image, date,description }));
   
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('')
   // setId(0)
};

  return (
    <div className="Add-btn-container">
    <button className="watch-btn" onClick={openModal}>
       edit
      </button>
    
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        
        <form>
          <label>Movie Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Rate</label>
          {<input
            value={rating}
            type="text"
            name="rating"
            required
            onChange={(e) => setRating(e.target.value)}
          />}
          

          <label>Movie Release Date</label>
          <input
            value= {date}
            type="number"
            name="date"
            required
            onChange={(e) =>  setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            value={image}
            type="url"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Summary</label>
          <textarea
            value={ description}
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={editMovies}>
         edit
        </button>
        
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditMovie;
