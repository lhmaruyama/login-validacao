import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'

const Login = () => {
    const navigate =  useNavigate()

    function entrar(){
        let usuario = document.querySelector('#usuario')
        let userLabel = document.querySelector('#userLabel')

        let senha = document.querySelector('#senha')
        let senhaLabel = document.querySelector('#senhaLabel')

        let msgError = document.querySelector('#msgError')
        let listaUser = []

        let userValid = {
            nome: '',
            user: '',
            senha: '',
            id: ''
        }

        listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        console.log(listaUser)

        listaUser.forEach((item) => {
            if(usuario.value === item.userCad && senha.value === item.senhaCad){
                userValid = {
                    nome: item.nomeCad,
                    user: item.userCad,
                    senha: item.senhaCad,
                    id: item.idUser
                }
            }
        })


        if(usuario.value === userValid.user && senha.value === userValid.senha){
            navigate('/profile/' + userValid.id)
            console.log(listaUser)
        }else{
            userLabel.setAttribute('style', 'color: red')
            usuario.setAttribute('style', 'color: red')
            senhaLabel.setAttribute('style', 'color: red')
            senha.setAttribute('style', 'color: red')
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Senha ou usuario incorretos'
            usuario.focus()
        }


    }
    return (
    <div className="container">
        <div className="card">
            <h1>Entrar</h1>
            <div id="msgError"></div>
            <div className="label-float">
                <input type="text" id="usuario" placeholder="" required/>
                <label id="userLabel" htmlFor="usuario">Usuario</label>
            </div>
            <div className="label-float">
                <input type="password" id="senha" placeholder="" required/>
                <label id="senhaLabel" htmlFor="senha">Senha</label>
            </div>
            <div className="justify-center">
                <button onClick={()=>entrar()}>Entrar</button>
            </div>
            <div className="justify-center">
                <hr></hr>
            </div>
            <span>Não tem uma conta? <Link to="register" className="link"><p>Castastre-se</p></Link></span>
        </div>
    </div>    
    
    
    );
}
export default Login

