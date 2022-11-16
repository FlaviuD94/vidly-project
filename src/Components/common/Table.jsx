import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({ moviesNum, sortColumn, columns, raiseSort, moviesOnPage }) {
  return (
    <>
      <table className={moviesNum ? 'table' : 'd-none'}>
        <TableHeader
          sortColumn={sortColumn}
          columns={columns}
          raiseSort={raiseSort}
        />
        <TableBody columns={columns} data={moviesOnPage} />
      </table>
    </>
  );
}

export default Table;
