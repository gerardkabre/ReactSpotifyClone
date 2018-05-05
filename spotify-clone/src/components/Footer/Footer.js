import React from 'react';
import AudioController from '../../config/AudioController';

import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';

import './Footer.css';

const noSongSelected = resume => (
  <div className="footer">
    <div className="footer__SongDetails">
      <p style={{color: '#77797c'}}> Select a song </p>
      <p style={{color: '#77797c'}}>no artist selected</p>
    </div>
    <div className="footer__Button footer__Button-isPaused" onClick={() => alert('Select a song first')}>
      <FaPlay size={50}  />
    </div>

    <div className="footer__name"> Made by gerard cabrerizo</div>
  </div>
);

const songPaused = (resume, songDetails) => (
  <div className="footer">
    <div className="footer__SongDetails">
      <p>{songDetails.name}</p>
      <p>{songDetails.artists[0].name}</p>
    </div>
    <div className="footer__Button footer__Button-isPaused" onClick={() => resume()}>
      <FaPlay size={50} />
    </div>

    <div className="footer__name">  Made by gerard cabrerizo</div>
  </div>
);

const Footer = ({ isPlaying, songDetails, pause, resume }) => {
  if (!isPlaying && !songDetails) return noSongSelected(resume);
  if (!isPlaying) return songPaused(resume, songDetails);
  return (
    <div className="footer">
      <div className="footer__SongDetails">
        <p>{songDetails.name}</p>
        <p>{songDetails.artists[0].name}</p>
      </div>

      <div className="footer__Button footer__Button-isPlaying" onClick={() => pause()}>
        <FaPause size={50}  />
      </div>

      <div className="footer__name">  Made by gerard cabrerizo</div>
    </div>
  );
};

export default AudioController(Footer);
