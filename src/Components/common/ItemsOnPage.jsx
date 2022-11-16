import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ItemsOnPage({ pageSize, onPageSizeSelect }) {
  const pages = [3, 5, 10];
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-variants-primary"
        title="Items on page"
      >
        {pages.map((page) => (
          <Dropdown.Item
            key={page}
            onClick={() => onPageSizeSelect(page)}
            className={page === pageSize ? 'active' : ''}
          >
            {page}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}

export default ItemsOnPage;
