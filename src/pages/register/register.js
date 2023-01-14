import React from "react";
import './style.css'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    //localStorage.clear()
    const navigate =  useNavigate()
    let validConfirmSenha = false
    let validSenha = false
    let validUsuario = false
    let validNome = false
    console.log(validNome,' ' + validUsuario,' ' + validSenha,' ' + validConfirmSenha)

    function cadastrar(){

        console.log(validNome,' ' + validUsuario,' ' + validSenha,' ' + validConfirmSenha)
        let nome = document.querySelector('#nome')
        let usuario = document.querySelector('#usuario')
        let senha = document.querySelector('#senha')
        let msgError = document.querySelector("#msgError")
        let msgSucess = document.querySelector("#msgSucess")
        if (validNome && validUsuario && validSenha && validConfirmSenha){
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
            listaUser.push({
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            })
    
            localStorage.setItem('listaUser', JSON.stringify(listaUser))

            msgError.setAttribute('style', 'display: none')
            msgError.innerHTML = ''
            msgSucess.setAttribute('style', 'display: block')
            msgSucess.innerHTML = 'Cadastro realizado, abrindo página de login'

            setTimeout(() => {
                navigate('/login')
            }, 2500);


        }else{
            msgSucess.setAttribute('style', 'display: none')
            msgSucess.innerHTML = ''
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Preencha os dados corretamente'
        }
    }
    
    function validacaoNome(){
        let nome = document.querySelector('#nome')
        let labelNome = document.querySelector('#labelNome')

        nome.addEventListener('keyup',()=>{
            if(nome.value.length <= 2){
                labelNome.setAttribute('style', 'color: red')
                labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
                nome.setAttribute('style', 'border-color: red')
                validNome = false

            }else{
                labelNome.setAttribute('style', 'color: green')
                labelNome.innerHTML = 'Nome'
                nome.setAttribute('style', 'border-color: green')
                validNome = true
            }
        })
    }

    function validacaoUsuario(){
        let usuario = document.querySelector('#usuario')
        let labelUsuario = document.querySelector('#labelUsuario')

        usuario.addEventListener('keyup',()=>{
            if(usuario.value.length <= 4){
                labelUsuario.setAttribute('style', 'color: red')
                labelUsuario.innerHTML = 'Usuario *Insira no mínimo 5 caracteres'
                usuario.setAttribute('style', 'border-color: red')
                validUsuario = false
            }else{
                labelUsuario.setAttribute('style', 'color: green')
                labelUsuario.innerHTML = 'Usuario'
                usuario.setAttribute('style', 'border-color: green')
                validUsuario = true
            }
        })
    }


    function validacaoSenha(){
        let senha = document.querySelector('#senha')
        let labelSenha = document.querySelector('#labelSenha')
        let confirmSenha = document.querySelector('#confirmSenha')
        let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
        senha.addEventListener('keyup',()=>{
            if(senha.value.length <= 5){
                labelSenha.setAttribute('style', 'color: red')
                labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
                senha.setAttribute('style', 'border-color: red')
                validSenha = false
            }else{
                labelSenha.setAttribute('style', 'color: green')
                labelSenha.innerHTML = 'Senha'
                senha.setAttribute('style', 'border-color: green')
                validSenha = true
            }
            if(senha.value != confirmSenha.value){
                labelConfirmSenha.setAttribute('style', 'color: red')
                labelConfirmSenha.innerHTML = 'As senhas não conferem'
                confirmSenha.setAttribute('style', 'border-color: red')
                validConfirmSenha = false
            }else{
                labelConfirmSenha.setAttribute('style', 'color: green')
                labelConfirmSenha.innerHTML = 'Confirmar Senha'
                confirmSenha.setAttribute('style', 'border-color: green')
                validConfirmSenha = true
            }
        })
    }


    function validacaoConfirmSenha(){
        let confirmSenha = document.querySelector('#confirmSenha')
        let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
        let senha = document.querySelector('#senha')
        confirmSenha.addEventListener('keyup',()=>{
            if(senha.value != confirmSenha.value){
                labelConfirmSenha.setAttribute('style', 'color: red')
                labelConfirmSenha.innerHTML = 'As senhas não conferem'
                confirmSenha.setAttribute('style', 'border-color: red')
                validConfirmSenha = false
            }else{
                labelConfirmSenha.setAttribute('style', 'color: green')
                labelConfirmSenha.innerHTML = 'As senhas são idênticas'
                confirmSenha.setAttribute('style', 'border-color: green')
                validConfirmSenha = true
            }
        })
    }



    return (
        <div className="container">
            <div className="card">
                <h1>Cadastrar</h1>
                <div id="msgError"></div>
                <div id="msgSucess"></div>


                <div className="label-float">
                    <input onKeyUp={()=>validacaoNome()} type="text" id="nome" placeholder="" required/>
                    <label id="labelNome" htmlFor="nome">Nome</label>
                </div>
                <div className="label-float">
                    <input onKeyUp={()=>validacaoUsuario()} type="text" id="usuario" placeholder="" required/>
                    <label id="labelUsuario" htmlFor="usuario">Usuario</label>
                </div>
                <div className="label-float">
                    <input onKeyUp={()=>validacaoSenha()} type="password" id="senha" placeholder="" required/>
                    <label id="labelSenha" htmlFor="senha">Senha</label>
                </div>
                <div className="label-float">
                    <input onKeyUp={()=>validacaoConfirmSenha()} type="password" id="confirmSenha" placeholder="" required/>
                    <label id="labelConfirmSenha" htmlFor="confirmSenha">Confirmar Senha</label>
                </div>
                <div className="justify-center">
                    <button onClick={()=>cadastrar()}>Cadastrar</button>
                </div>
                <div className="justify-center">
                    <hr></hr>
                </div>
            </div>
        </div>   
    );
}
export default Register

