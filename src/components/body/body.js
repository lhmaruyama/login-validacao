import React from "react";
import './style.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Initial from '../../pages/initial/initial'
import Contact from '../../pages/contact/contact'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import Profile from '../../pages/profile/profile'

const Body = () => {
    return ( 
        <div className='div-body'>
            <Routes>
                <Route path='/' element={<Initial/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
            </Routes>
        </div>
    );
}
export default Body

