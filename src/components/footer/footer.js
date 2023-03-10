import React from "react";
import './style.css';
import Email from './_email.png'
import Whats from './_whats.png'
import Face from './_face.png'
import Insta from './_insta.png'
import Youtube from './youtube.png'

const Footer = () => {
    return (
    <div className="footer-menu">
        <div className="icons">
            <a href="https://github.com/lhmaruyama/login-validacao"><img alt="" className="icon" src={Email}/></a>
            <a href="https://github.com/lhmaruyama/login-validacao"><img alt="" className="icon" src={Face}/></a>
            <a href="https://github.com/lhmaruyama/login-validacao"><img alt="" className="icon" src={Insta}/></a>
            <a href="https://github.com/lhmaruyama/login-validacao"><img alt="" className="icon" src={Whats}/></a>
            <a href="https://github.com/lhmaruyama/login-validacao"><img alt="" className="icon" src={Youtube}/></a>
        </div>
        <span className="footer-text"><a href="https://github.com/lhmaruyama/login-validacao">Todos os direitos reservados</a></span>
    </div>
    );
}
export default Footer

