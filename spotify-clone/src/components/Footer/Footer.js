import React from 'react';
import AudioController from '../../config/AudioController';
import './Footer.css';

const noSongSelected = resume => (
  <div className="footer">
    <div clasName="footer__SongDetails">
      <p>Select a song first</p>
      <p>Select an artist first</p>
    </div>
    <div className="footer__Button footer__Button-isPaused" onClick={() => alert('Select a song first')}>
      'Play'
    </div>
  </div>
);

const songPaused = (resume, songDetails) => (
  <div className="footer">
    <div clasName="footer__SongDetails">
      <p>{songDetails.name}</p>
      <p>{songDetails.artists[0].name}</p>
    </div>
    <div className="footer__Button footer__Button-isPaused" onClick={() => resume()}>
      'Play'
    </div>
  </div>
);

const Footer = ({ isPlaying, songDetails, pause, resume }) => {
  if (!isPlaying && !songDetails) return noSongSelected(resume);
  if (!isPlaying) return songPaused(resume, songDetails);
  return (
    <div className="footer">
      <div clasName="footer__SongDetails">
        <p>{songDetails.name}</p>
        <p>{songDetails.artists[0].name}</p>
      </div>

      <div className="footer__Button footer__Button-isPlaying" onClick={() => pause()}>
        'Pause'
      </div>
    </div>
  );
};

export default AudioController(Footer);
