import { useState, useEffect } from 'react';
import { getMovies } from '../services/fakeMovieService';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';
import ItemsOnPage from './common/ItemsOnPage';

function Movies() {
  const [movies, setMovies] = useState([]);

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState(getGenres());
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' });

  const data = [...movies];
  const moviesNum = data.length;

  useEffect(() => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    setGenres(genres);
  }, []);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = (e) => {
    const movies = data.filter((m) => m._id !== e._id);
    setMovies(movies);
  };

  const handleLike = (movie) => {
    const movies = data;
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    setMovies(movies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSize = (e) => {
    setPageSize(e);
  };

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const moviesOnPage = paginate(sorted, currentPage, pageSize);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
        {moviesNum === 0 ? (
          <p>There are no movies in the database.</p>
        ) : (
          <p>{`Showing ${filtered.length} movies in the database.`}</p>
        )}
        {moviesNum && (
          <MoviesTable
            moviesNum={moviesNum}
            moviesOnPage={moviesOnPage}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
          />
        )}
        <div className="row">
          <div className="col">
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="col-3">
            <ItemsOnPage
              pageSize={pageSize}
              onPageSizeSelect={handlePageSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
