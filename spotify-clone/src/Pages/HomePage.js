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

const authUrl =
  'https://accounts.spotify.com/authorize?client_id=7601320fe8e34a45b95e142c37e48b52&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://gerardkabre.github.io/ReactSpotifyClone';

class HomePage extends Component {
  extractHashFromUrl() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) hashParams[e[1]] = decodeURIComponent(e[2]);

    this.props.dispatch(fetchTokenSuccess(hashParams.access_token));
  }

  componentDidMount() {
    if (!this.props.isLoggedIn) this.extractHashFromUrl();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isLoggedIn) {
      if (nextProps.token) this.props.dispatch(getUser(nextProps.token));
    } else {
      if (!this.props.hasFetchedSongs) this.props.dispatch(fetchRecentlyPlayed(this.props.token));
    }
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
