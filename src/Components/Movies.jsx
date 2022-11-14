import { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Movie from './Movie';

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const data = [...movies];
  const moviesNum = data.length;
  const handleDelete = (e) => {
    const movies = data.filter((m) => m._id !== e._id);
    setMovies(movies);
  };
  const handleLike = (movie) => {
    const movies = data;
    const index = movies.indexOf(movie);
    console.log(movies[index]);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    console.log(movies[index]);

    setMovies(movies);
  };

  return (
    <>
      {moviesNum === 0 ? (
        <p>There are no movies in the database.</p>
      ) : (
        <p>{`Showing ${moviesNum} movies in the database.`}</p>
      )}
      <table className={moviesNum ? 'table' : 'd-none'}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => {
            return (
              <tr key={movie._id}>
                <Movie
                  onLike={handleLike}
                  movie={movie}
                  onDelete={handleDelete}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Movies;
