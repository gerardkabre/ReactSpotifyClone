import React from 'react';
import './displayList';

const DisplayList = ({ data }) => (
  <ul>
    {data.map(item => (
      <li className="displayListItem" key={item.id}>
        nombre: {item.name}, link: {item.href},
      </li>
    ))}
  </ul>
);

export default DisplayList;
