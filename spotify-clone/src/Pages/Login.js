import React, { Component } from 'react';

import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';

import { fetchTokenRequested } from '../actions/user';

const authUrl =
  'https://accounts.spotify.com/authorize?client_id=7601320fe8e34a45b95e142c37e48b52&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://gerardkabre.github.io/ReactSpotifyClone/#/app/Callback';

class Login extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      if (!this.props.token) return (window.location.href = authUrl);
    }
  }

  render() {
    return (
      <Container>
        <TitleSubtitle title="You must Login with your account first" subtitle="" />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    token: state.user.token
  };
};

export default connect(mapStateToProps)(Login);
