import React, { Component } from 'react';

import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';

import { fetchTokenSuccess } from '../actions/user';
import { fetchTokenRequested } from '../actions/user';
import { getUser } from '../actions/user';

const authUrl =
  'https://accounts.spotify.com/authorize?client_id=7601320fe8e34a45b95e142c37e48b52&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://gerardkabre.github.io/ReactSpotifyClone/';

class Login extends Component {
  extractHashFromUrl() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) hashParams[e[1]] = decodeURIComponent(e[2]);
    this.props.dispatch(fetchTokenSuccess(hashParams.access_token));
  }

  componentDidMount() {
    if (!this.props.isLoggedIn) {

      if (!this.props.token && !this.props.tokenRequested) {
        alert('motherfucker no token and not requested');

        this.props.dispatch(fetchTokenRequested());
        window.location.href = authUrl;
      }
      if (!this.props.token && this.props.tokenRequested) {
        alert('motherfucker no token but has requested it');

        this.extractHashFromUrl();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    alert('motherfucker will receive props');

    if (!this.props.isLoggedIn) {
      alert('motherfucker not logged in and will try to get user')
      if (nextProps.token) this.props.dispatch(getUser(nextProps.token));
    } else {
      alert('motherfucker has logged in');
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
    token: state.user.token,
    tokenRequested: state.user.tokenRequested
  };
};

export default connect(mapStateToProps)(Login);
