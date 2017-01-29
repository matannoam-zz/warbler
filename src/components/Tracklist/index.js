import { h } from 'preact';
import { connect } from 'preact-redux'

import Tracklist from './presenter'

function mapStateToProps(state) {
  const tracks = state.tracks
  return { tracks }
}

export default connect(mapStateToProps)(Tracklist)
