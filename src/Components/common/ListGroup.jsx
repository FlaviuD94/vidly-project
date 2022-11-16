import React from 'react';

function ListGroup({
  selectedItem,
  onItemSelect,
  items,
  valueProprety,
  textProprety,
}) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProprety]}
          className={
            selectedItem === item
              ? 'clickable list-group-item active'
              : 'clickable list-group-item'
          }
        >
          {item[textProprety]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProprety: 'name',
  valueProprety: '_id',
};

export default ListGroup;
