import { h } from 'preact'
import { Link } from 'pre-bp-router'

import NavigationBar from '../components/NavigationBar'

export default function MainPage () {
  return (
    <div>
      <NavigationBar />
      <p>
        <Link href='/libraries'>libraries (in production)</Link>
      </p>
      <p>
        <a href="https://github.com/matannoam/warbler">
          see the code
        </a>
      </p>
    </div>
  )
}
