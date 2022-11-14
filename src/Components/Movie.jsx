import React from 'react';
import Like from './common/Like';

function Movie({ onLike, onDelete, movie }) {
  return (
    <>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      </td>
      <td>
        <button
          onClick={() => {
            onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </>
  );
}

export default Movie;
