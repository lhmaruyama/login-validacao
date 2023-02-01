import React from "react";
import Logo from './logo.png'
import './style.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header-menu">
            <Link to='http://localhost:3000/'><img alt="" className="logo" src={Logo}/></Link>
            <div className="menu">
                <ul className="list">
                <Link to='http://localhost:3000/'><li>HOME</li></Link>
                <Link to='http://localhost:3000/contact'><li>CONTACT</li></Link>
                <Link to='http://localhost:3000/login'><li>LOGIN</li></Link>
                </ul>
            </div>
        </nav>    
    );
}
export default Header

