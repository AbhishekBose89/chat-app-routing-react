import React from 'react';
import './Login.css';
import { useState } from 'react';
import LoginDetails from '../Json/LoginDetails.json'
import { useLocation, useNavigate } from 'react-router-dom'


let Login = () => {
    let location = useLocation()
    let navigator = useNavigate()

    console.log(location.pathname)
    console.log(location.search)

    if (location.pathname == "" || location.pathname == null || location.pathname == undefined) {
        navigator("/home", true)
    }

    const [formData, setformData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;

    let changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
        console.log(formData);
    }

    function submitHandler(e) {
        e.preventDefault();

        if (LoginDetails.email === email && LoginDetails.password === password) {
            navigator('/home', true)
            // navigator("/todolist", true)
        }
        else {
            // navigator('/invalidaccess', true)
            navigator('/login', true)
        }
    }
    return (
        <div className='login-form'>
            <h2>Log In</h2>
            <form onSubmit={submitHandler}>
                <div id='input'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' onChange={changeHandler} value={email} placeholder='Enter your Email' />
                </div>
                <div id='input'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' onChange={changeHandler} value={password} placeholder='Enter your Password' />
                </div>
                <div>
                    <button type='submit' id='submit'>Log In</button>
                </div>
            </form>

        </div>
    )
};
export default Login;