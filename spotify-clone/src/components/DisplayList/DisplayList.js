import React from 'react';
import AudioController from '../../config/AudioController';

import './DisplayList.css';

const DisplayList = ({ data, album, play }) => {
  const renderAlbumList = () => (
    <ul className="displayList">
      {data.map(item => (
        <li className="displayListItem" key={item.id} onClick={() => play(item.album.tracks.items[0])} >
          <img src={item.album.images[0].url} />
          <p>{item.album.name}</p>
        </li>
      ))}
    </ul>
  );

  if (!data) return 'loading...';
  return renderAlbumList();
};

export default AudioController(DisplayList);
