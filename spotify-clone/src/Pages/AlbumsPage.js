import React, { Component } from 'react';

import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';
import DisplayList from '../components/DisplayList/DisplayList';

import { getAlbums } from '../actions/albums';

class AlbumsPage extends Component {
  componentDidMount() {
    if (!this.props.hasFetchedAlbums) this.props.dispatch(getAlbums(this.props.token));
  }

  render() {
    return (
      <Container>
        <TitleSubtitle title="Your Albums" subtitle="all the albums you have saved" />
        <DisplayList data={this.props.albums} album />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    token: state.user.token,
    albums: state.albums.list.items,
    hasFetchedAlbums: state.albums.HasFetched
  };
};

export default connect(mapStateToProps)(AlbumsPage);
