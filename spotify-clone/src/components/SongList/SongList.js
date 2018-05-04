import React from 'react';
import './SongList.css';

const SongList = ({ data, onItemClick }) => {
  if (data === undefined) return <p> LOADING </p>;
  return (
    <ul className="songList">
      <li className="songList__item songList__item__title">
        <p className="songList__item__1">Name</p>
        <p className="songList__item__2">Artist</p>
        <p className="songList__item__3">Album</p>
      </li>
      {data.map(item => (
        <li className="songList__item" key={item.id} onClick={e => onItemClick(item)}>
          <p className="songList__item__1">{item.track.name}</p>
          <p className="songList__item__2">{item.track.artists[0].name}</p>
          <p className="songList__item__3">{item.track.album.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
