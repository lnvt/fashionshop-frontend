import React from 'react';
import {Link} from 'react-scroll'

function Navbar(props) {
    return (
        <div>
            <nav>
                <Link to = "main" className="logo">
                    {/* <img src={} alt="logo" /> */}
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className ="menu">
                    <li><Link to="main" className="active"> Home </Link></li>
                    <li><Link to="abc" className="active"> ABC </Link></li>
                    <li><Link to="xyz" className="active"> XYZ </Link></li>
                    <li><Link to="aaa" className="active"> AAA </Link></li>
                    <li><Link to="ccc" className="active"> CCC </Link></li>
                </ul>
                 <Link to = "#" className="">App</Link>
            </nav>
        </div>
    );
}

export default Navbar;