import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const [error, setError] = useState('');

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="text-center mt-5 d-flex justify-content-center align-items-center bg-form">
            <div>
                <div className="text-primary">
                    <h1>Please, Login with google</h1>
                </div>
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-danger">
                    <i class="fab fa-google"></i> Google Sign In
                </button>
            </div>
            <br />
            <br />
            <p className="text-danger">{error}</p>
        </div>
    );
};

export default LogIn;
