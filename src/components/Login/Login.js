import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    // use firebase
    const {signInWithGoogle} = useFirebase();
    return (
        <div  className="login-form">
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter email"/> <br />
                    <input type="password" name="" id="" placeholder="Enter password"/> <br />
                    <button>submit</button>
                </form>
                <p>New to ema-john <Link to="/register">Create Account</Link></p> <br />
                <div>---------- or --------</div>
                <button className="btn-regular" onClick={signInWithGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;