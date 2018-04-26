import React from 'react';
import './DisplayList.css';

const DisplayList = ({ data }) => (
  <ul className="displayList">
    {data.map(item => (
      <li className="displayListItem" key={item.id}>
        <img src={item.images[0].url} />
        <p>{item.name}</p>
      </li>
    ))}
  </ul>
);

export default DisplayList;
