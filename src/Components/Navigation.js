import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <u1>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/contact'>Contact</Link></li>
          <li> <Link to='/todolist'>todolist</Link></li>
                  </u1>
      </nav>
    </div>
  )
}

export default Navigation