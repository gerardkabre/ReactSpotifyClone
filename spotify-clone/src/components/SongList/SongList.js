import React from 'react';
import './SongList.css';

const SongList = ({ data }) => {
  if (data != undefined) {
    return (
      <ul className="songList">
        {data.map(item => (
          <li className="songList__item" key={item.id}>
            <p className="songList__item__1">{item.track.name}</p>
            <p className="songList__item__2">{item.track.album.name}</p>
            <p className="songList__item__3">{item.played_at}</p>
          </li>
        ))}
      </ul>
    );
  } else return <p> LOADING </p>;
};

export default SongList;
