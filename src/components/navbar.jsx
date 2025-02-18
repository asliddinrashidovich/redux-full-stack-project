import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container mt-3">
      <Link to='/'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsI9HwvdSE5wx0pEigeQsB0Ko3ILVF8uunw&s" width='40' alt="header logo" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to='/login'>
          Login
        </Link>
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to='/register'>
          Register
        </Link>
      </nav>
    </div>
  )
}

export default Navbar