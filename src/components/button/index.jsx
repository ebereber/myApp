import { Link } from 'react-router-dom'
import { Btn } from './styles'

function Button({ children, to, className }) {
  return (
    <Link to={to}>
      <Btn className={className}>{children}</Btn>
    </Link>
  )
}

export default Button
