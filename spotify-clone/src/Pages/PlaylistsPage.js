import React, { Component } from 'react';

import { connect } from 'react-redux';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';
import DisplayList from '../components/DisplayList/DisplayList';

import { getPlaylists } from '../actions/playlists';

class PlaylistsPage extends Component {
  
  componentDidMount() {
    this.props.hasFetched ? null : this.props.dispatch(getPlaylists());
  }

  render() {
    const { isFetching, list, hasFetched } = this.props;
    if (hasFetched) {
      return (
        <Container>
          <TitleSubtitle title="Playlists Page" subtitle="Lastest Jazz playlists form spotify" />
          <DisplayList data={list.playlists.items} />
        </Container>
      );
    } else {
      return (
        <Container>
          <TitleSubtitle title="Playlists Page" subtitle="Lastest Jazz playlists form spotify" />
          <TitleSubtitle subtitle="Loading lists.." />
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.playlists.isFetching,
    list: state.playlists.list,
    hasFetched: state.playlists.hasFetched
  };
};

export default connect(mapStateToProps)(PlaylistsPage);
