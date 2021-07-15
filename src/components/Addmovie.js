import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Modal from 'react-modal';
import {addMovie} from "../js/action/Action"



Modal.setAppElement('#root');

const AddMovie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [ date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('');
  }

  /*const handleSubmit = (e) => {
    let newMovie = {
      name: name,
      rating: rating,
      image: image,
     date: date,
     description: description,
    };
    dispatch(addMovie(e, newMovie));
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('');
  };*/
 const addMovies = () => {
    
    dispatch(addMovie({name, rating,image, date,description }));
  
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDate('');
    setDescription('')};
  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
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
          
          <label>Movie Image</label>
          <input
            value={image}
            type="url"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Release Date</label>
          <input
            value= {date}
            type="number"
            name="date"
            required
            onChange={(e) =>  setDate(e.target.value)}
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
        <button className="Modal-btn"  onClick={addMovies}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
