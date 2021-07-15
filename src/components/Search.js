import React from 'react';

import Rate from './Rate';



const Search = ({ setNameSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Type movie name to search'
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

export default Search;
