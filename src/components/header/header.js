import React from "react";
import Logo from './logo.png'
import Icon from './icon.png'
import './style.css'
import { Link } from 'react-router-dom';

const Header = () => {
    let control = false
    function display() {
        control =! control
        const menu = document.querySelector('.list')
        if(control == true){
            menu.style.display = 'flex'
        }else{
            menu.style.display = 'none'
        }
        
    }
    return (
        <nav className="header-menu">
            <Link to='/'><img className="logo" src={Logo}/></Link>
            <div className="menu">
                <ul className="list">
                <Link to='/'><li>HOME</li></Link>
                <Link to='/contact'><li>CONTACT</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
                </ul>
            </div>
        </nav>    
    );
}
export default Header

