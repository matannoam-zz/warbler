import { h } from 'preact'
import { Link } from 'pre-bp-router'

import BirdHeading from '../components/BirdHeading'
import NavigationBar from '../components/NavigationBar'
import Tracklist from '../components/Tracklist'
import QueenButton from '../components/QueenButton'

export default function MainPage () {
  return (
    <div>
      <BirdHeading />
      <p>
        Warbler is a way to hear two songs I selected from Internet
        Archive's <a href="https://archive.org/details/etree" target="_blank">
          live music
        </a> and
        a song from SoundCloud.
        It works on computers, laptops, tablets, and phones.
      </p>
      <blockquote>
        <p className="teal"><em>It's the app I've always dreamed of.</em></p>
        <p><small>- Matan Noam Shavit, creator of Warbler</small></p>
      </blockquote>
      <Tracklist />
      <p><QueenButton to='/bird' /></p>
      <NavigationBar />
      <p>
        <Link href='/libraries'>libraries (in production)</Link>
      </p>
      <p>
        <a target="_blank" href="https://github.com/matannoam/warbler">
          see the code
        </a>
      </p>
    </div>
  )
}
