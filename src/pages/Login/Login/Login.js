import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, isLoading, user, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div className="login_area">
                {!isLoading && <div className="login_input_field">
                    <h3 className='text-center'>Please Login</h3>
                   <form onSubmit={handleLogin}>    
                        <input type="email" name='email' placeholder='Your Email'/>
                        <input type="password" name='password' placeholder='Your Pasword'/>
                        <button type='submit' className='btn btn-danger m-auto d-block w-50' >Login</button>
                   </form>
                   <p className='text-center'>Don't have an acoount?<Link to="/register">Create an Account</Link></p>
                   <div className='text-center'>---------OR----------</div>
                   <button onClick={handleGoogleSignIn} className='btn btn-danger d-block m-auto w-50'>Continue in Google</button>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert severity="success" className='mt-2'>Login Successfully</Alert>}
                    {authError && <Alert severity="error" className='mt-2'>{authError}</Alert>}
                </div>}
                    
            </div>
        </div>
    );
};

export default Login;