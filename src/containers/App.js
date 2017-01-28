import { h } from 'preact'
import { Link } from 'pre-bp-router'

import appStyle from '../styles/appStyle'

export default function App ({ children }) {
  return (
    <div style={appStyle}>
      <h1>Warbler</h1>
      <h2>listen to music</h2>
      {children}
      <p><small>
        hand-made by <a href='https://github.com/matannoam'>Matan Noam Shavit</a>.
      </small></p>
    </div>
  )
}
