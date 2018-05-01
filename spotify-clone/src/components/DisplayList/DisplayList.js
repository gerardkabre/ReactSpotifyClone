import React from 'react';
import './DisplayList.css';

const DisplayList = ({ data, album }) => {
  if (data) {
    if (album) {
      return (
        <ul className="displayList">
          {data.map(item => (
            <li className="displayListItem" key={item.album.id}>
              <img src={item.album.images[1].url} />
              <p>{item.album.name}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className="displayList">
          {data.map(item => (
            <li className="displayListItem" key={item.id}>
              <img src={item.images[0].url} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      );
    }
  } else return 'loading...';
};

export default DisplayList;
