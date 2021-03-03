import React from 'react'
import { NavLink , Link } from 'react-router-dom'

const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="#">ReactUser</NavLink>
                {/* <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link " aria-current="page" exact to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div> */}
            </div>
            {/* <Link className="btn btn-outline-line" to="/users/adduser">Add User</Link> */}
        </nav>

    )
}

export default Nav 