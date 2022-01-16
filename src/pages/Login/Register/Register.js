import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {registerUser, isLoading, user, authError, signInWithGoogle} = useAuth();

    const history = useHistory();
    const location = useLocation();
    //data take from input field and store satet

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
    }

    //data send to the firebase store

    const handleRegisterSubmit = e =>{
        e.preventDefault()
        if(loginData.password !==loginData.password2){
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }

    //handle google login
    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }

    return (
        <>
            <div className="register_area">
                {!isLoading && <div className="register_input_field">
                    <h3 className='text-center'>Create An Account</h3>
                   <form onSubmit={handleRegisterSubmit}>
                        <input type="text" name="name" onBlur={handleOnBlur} placeholder='Your Name'/>
                        <input type="email" name="email" onBlur={handleOnBlur} placeholder='Your Email'/>
                        <input type="password" name='password' onBlur={handleOnBlur} placeholder='Your Pasword'/>
                        <input type="password" name="password2" onBlur={handleOnBlur} placeholder='ReType Your Pasword'/>
                        <button type='submit' className='btn btn-danger d-block m-auto w-50' >Create An Account</button>
                   </form>
                   <p className='text-center'>Already Have an Account?<Link to="/login">Login</Link></p>
                   <div className='text-center'>-------OR-------</div>
                   <button onClick={handleGoogleSignIn} className='btn btn-danger d-block m-auto w-50'>Continue in Google</button>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert severity="success" className='mt-2'>User Created Successfully</Alert>}
                    {authError && <Alert severity="error" className='mt-2'>{authError}</Alert>}
                </div>}
                
                    
            </div>
        </>
    );
};

export default Register;