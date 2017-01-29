import { h } from 'preact'
import { Link } from 'pre-bp-router'

import appStyle from '../styles/appStyle'

export default function App ({ children }) {
  var streamUrl = 'https://api.soundcloud.com/tracks/281029126/stream?client_id=INSERT_CLIENT_ID'
  return (
    <div className='container' style={appStyle}>
      {children}
      <audio id='audio1'><source src={streamUrl} /></audio>
      <p><small>
          Hand-crafted by Matan Noam Shavit.<br />
          Licensed under the <a target="_blank" href="https://tldrlegal.com/license/mit-license" title="MIT License">MIT License</a>.<br />
          Legal text can be found on a song's original webpage; no content is hosted here.<br />
          logo designed by <a target="_blank" href="http://www.franstudios.com/" title="Fran! Studios">Francisco Sarmiento</a>.<br />
          theme based on <a target="_blank" href="https://milligram.github.io/" title="Milligram">Milligram</a>.
      </small></p>
    </div>
  )
}
