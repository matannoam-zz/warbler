import { h } from 'preact'
import { Link } from 'pre-bp-router'

export default function BirdHeading () {
  return (
    <div>
      <hr />
      <div>
        <div className="float-left">
          <Link href="/"><img src="warbler.png" className='titleLogo' /></Link>
        </div>
        <div>
          <h1 className="title yellow">
            <Link href="/">
              <span style={{fontSize: '1.5em'}}>Warbler</span>
            </Link>
          </h1>
          <h4 className="title teal">a way to hear music</h4>
        </div>
        <div style="clear: both;"></div>
      </div>
      <hr style="clear: both;" />
    </div>
  )
}
