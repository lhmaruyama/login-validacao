import React from "react";
import Logo from './logo.png'
import Icon from './icon.png'
import './style.css'

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
            <a href="#"><img className="logo" src={Logo}/></a>
            <div className="menu">
                <ul className="list">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </div>
        </nav>    
    );
}
export default Header

