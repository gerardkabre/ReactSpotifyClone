import React from 'react';
import './DisplayList.css';

const DisplayList = ({ data, album }) => {
  
  const renderSongList = () => (
    <ul className="displayList">
      {data.map(item => (
        <li className="displayListItem" key={item.album.id}>
          <img src={item.album.images[1].url} />
          <p>{item.album.name}</p>
        </li>
      ))}
    </ul>
  );

  const renderAlbumList = () => (
    <ul className="displayList">
      {data.map(item => (
        <li className="displayListItem" key={item.id}>
          <img src={item.album.images[0].url} />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );

  if (!data) return 'loading...';
  if (album) return renderAlbumList();
  return renderSongList();
};

export default DisplayList;
