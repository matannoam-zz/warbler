import { h } from 'preact'

import BirdHeading from '../components/BirdHeading'
import NavigationBar from '../components/NavigationBar'
import BackToMainLink from '../components/BackToMainLink'

export default function PageOne () {
  return (
    <div>
      <BirdHeading />
      <NavigationBar />
      <h1>Page One</h1>
      <BackToMainLink />
    </div>
  )
}
