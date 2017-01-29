import { h } from 'preact';
import { Link } from 'pre-bp-router'

function QueenButton({ to }) {
  return (
    <Link className="button yellow" href={to}>
      Yas, <span className="icon">&#9813;</span>
    </Link>
  )
}

export default QueenButton
