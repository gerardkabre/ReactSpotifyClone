import React, { Component } from 'react';

import { connect } from 'react-redux';

import AudioController from '../config/AudioController';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';
import SongList from '../components/SongList/SongList';

import { fetchSongs } from '../actions/song';

class SongsPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSongs(this.props.token));
  }

  render() {
    return (
      <Container>
        <TitleSubtitle title="All your songs" subtitle="All your saved songs" />
        <SongList data={this.props.songs.items} onItemClick={this.props.play} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    songs: state.song.songs
  };
};

const SongsPageConnected = connect(mapStateToProps)(SongsPage);
export default AudioController(SongsPageConnected);
