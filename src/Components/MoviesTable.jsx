import React from 'react';
import Table from './common/Table';
import Like from './common/Like';

function MoviesTable({
  sortColumn,
  moviesNum,
  moviesOnPage,
  onDelete,
  onLike,
  onSort,
}) {
  const columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  const raiseSort = (path) => {
    const sortedColumn = { ...sortColumn };
    if (sortedColumn.path === path)
      sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortedColumn.path = path;
      sortedColumn.order = 'asc';
    }
    onSort(sortedColumn);
  };
  return (
    <>
      <Table
        raiseSort={raiseSort}
        moviesNum={moviesNum}
        sortColumn={sortColumn}
        columns={columns}
        moviesOnPage={moviesOnPage}
      />
    </>
  );
}

export default MoviesTable;
