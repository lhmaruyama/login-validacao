import React from "react";
import './style.css';
import { Routes, Route} from 'react-router-dom';
import Initial from '../../pages/initial/initial'
import Contact from '../../pages/contact/contact'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import Profile from '../../pages/profile/profile'

const Body = () => {
    return ( 
        <div className='div-body'>
            <Routes>
                <Route path='http://localhost:3000/' element={<Initial/>}/>
                <Route path='http://localhost:3000/contact' element={<Contact/>}/>
                <Route path='http://localhost:3000/login' element={<Login/>}/>
                <Route path='http://localhost:3000/register' element={<Register/>}/>
                <Route path='http://localhost:3000/profile/:id' element={<Profile/>}/>
            </Routes>
        </div>
    );
}
export default Body

