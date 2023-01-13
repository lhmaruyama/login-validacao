import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Login = () => {
    return (
    <div className="container">
        <div className="card">
            <h1>Entrar</h1>
            <div className="label-float">
                <input type="text" id="usario" placeholder="" required/>
                <label htmlFor="usuario">Usuario</label>
            </div>
            <div className="label-float">
                <input type="password" id="senha" placeholder="" required/>
                <label htmlFor="senha">Senha</label>
            </div>
            <div className="justify-center">
                <button>Entrar</button>
            </div>
            <div className="justify-center">
                <hr></hr>
            </div>
            <span>Não tem uma conta? <Link to="/register" className="link"><p>Castastre-se</p></Link></span>
        </div>
    </div>    
    
    
    );
}
export default Login

