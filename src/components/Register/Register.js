import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h1>Register: Ceate Account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter email"/> <br />
                    <input type="password" name="" id="" placeholder="Enter password"/> <br />
                    <input type="password" name="" id="" placeholder="Reenter password"/> <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-------- or ---------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;