import React from 'react';

function TableHeader({ raiseSort, columns, sortColumn }) {
  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            className="clickable"
            key={index}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
