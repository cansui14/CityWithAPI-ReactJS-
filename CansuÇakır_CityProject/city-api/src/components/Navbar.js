import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary '>
      <div className='container-fluid'>
          <Link className="navbar-brand" to="/">Istka Yazılım</Link>
                <button className='navbar-toggler' type="button" 
                data-bs-target="#navbarSupportedContent"
                data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/cities">City List</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/addCity">Add City</NavLink>
                        </li>
                    </ul>
                </div>
            </div>          
        </nav>
    );
}

export default Navbar;
