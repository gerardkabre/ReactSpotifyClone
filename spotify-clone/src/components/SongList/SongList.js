import React from 'react';
import './SongList.css';

const SongList = ({ data, onItemClick }) => {
  if (data === undefined) return <p> LOADING </p>;
  return (
    <ul className="songList">
      {data.map(item => (
        <li className="songList__item" key={item.id} onClick={e => onItemClick(item)}>
          <p className="songList__item__1">{item.track.name}</p>
          <p className="songList__item__2">{item.track.album.name}</p>
          <p className="songList__item__3">{item.played_at}</p>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
