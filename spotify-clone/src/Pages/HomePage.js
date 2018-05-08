import React, { Component } from 'react';

import { connect } from 'react-redux';

import AudioController from '../config/AudioController';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';
import SongList from '../components/SongList/SongList';

import { fetchTokenRequested } from '../actions/user';
import { fetchTokenSuccess } from '../actions/user';
import { getUser } from '../actions/user';
import { fetchRecentlyPlayed } from '../actions/song';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRecentlyPlayed(this.props.token));
  }

  render() {
    return (
      <Container>
        <TitleSubtitle title="Your Recently played songs" subtitle="Discover new Jazz artists, bands and playlists" />
        <SongList data={this.props.songs.items} onItemClick={this.props.play} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    token: state.user.token,
    songs: state.song.songs,
    hasFetchedSongs: state.song.hasFetchedRecentSongs
  };
};

const HomePageConnected = connect(mapStateToProps)(HomePage);
export default AudioController(HomePageConnected);
