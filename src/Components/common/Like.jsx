import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

function Like({ liked, onClick }) {
  return (
    <span style={{ cursor: 'pointer' }} onClick={onClick}>
      {liked ? <FaHeart /> : <FiHeart />}
    </span>
  );
}

export default Like;
