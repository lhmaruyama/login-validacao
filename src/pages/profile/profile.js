import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate =  useNavigate()
    function sair(){
        navigate('/')
    }
    return (
    <div className="container">
        <div className="perfil">VOCE ESTA NA PAGINA DO SEU PERFIL</div>
        <div className="dados"></div>
        <button onClick={()=>sair()} className="sair">SAIR</button>
    </div>
    
    );
}
export default Profile

