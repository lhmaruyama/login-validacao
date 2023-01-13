import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container">
            <div className="card">
                <h1>Cadastrar</h1>
                <div className="label-float">
                    <input type="text" id="nome" placeholder="" required/>
                    <label htmlFor="nome">Nome</label>
                </div>
                <div className="label-float">
                    <input type="text" id="usario" placeholder="" required/>
                    <label htmlFor="usuario">Usuario</label>
                </div>
                <div className="label-float">
                    <input type="password" id="senha" placeholder="" required/>
                    <label htmlFor="senha">Senha</label>
                </div>
                <div className="label-float">
                    <input type="password" id="confirmSenha" placeholder="" required/>
                    <label htmlFor="confirmSenha">Confirmar Senha</label>
                </div>
                <div className="justify-center">
                    <button>Cadastrar</button>
                </div>
                <div className="justify-center">
                    <hr></hr>
                </div>
            </div>
        </div>   
    );
}
export default Register

