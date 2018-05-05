/*
* Higher Order Component that gives audio control options to the components that need them.
* Returns a component connected to redux (to be able to dispatch actions), with the audio
* methods that dispatch those actions.
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { playSong } from '../actions/song';
import { pauseSong } from '../actions/song';
import { resumeSong } from '../actions/song';

export default function AudioController(WrappedComponent) {
  return connect(null, mapDispatchToProps)(
    class extends React.Component {
      play = song => {
        this.props.playSong(song);
      };
      pause = () => {
        this.props.pauseSong();
      };
      resume = () => {
        this.props.resumeSong();
      };

      render() {
        return <WrappedComponent play={this.play} resume={this.resume} pause={this.pause} {...this.props} />;
      }
    }
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      playSong,
      pauseSong,
      resumeSong
    },
    dispatch
  );
};
