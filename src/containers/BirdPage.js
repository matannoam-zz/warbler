import { h } from 'preact';

import QueenButton from '../components/QueenButton'

function BirdPage() {
  return (
    <div>
      <img src='warbler.png' style={{width: '100%', maxWidth:'75rem'}}/>
      <p><QueenButton to="/" /></p>
    </div>
  )
}

export default BirdPage
