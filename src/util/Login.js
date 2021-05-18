import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { login } from '../fllux/actions/authActions';
import { loadQuestion } from '../fllux/actions/resetActions';

import './style.css';

const Login = ({auth, user, history, login, errorMsg, loadQuestion}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [keepConnection, setKeepConnection] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || ! password) alert('Fill all the field !!');
        else {
            const userData = {
                email,
                password,
            };
            login(userData, keepConnection);
        }        
    };

    const handleResetPassword = () => {
        if (!validateEmail(email)) alert('Provide the email first ');
        else loadQuestion(email);
    };

    useEffect(() => {
        if (auth && user) history.push("/");
        else if (errorMsg) alert(errorMsg);
    }, [errorMsg, auth, user]);

    const ConditionalLink = ({ children, to, condition, onClick }) => (condition && to)
      ? <Link to={to} onClick={onClick}>{children}</Link>
      : <>{children}</>;

    return (
        <form className="auth-wrapper auth-inner" onSubmit={onSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"
                        onClick={() => setKeepConnection(!keepConnection)}
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="forgot-password text-right">
                Forgot <ConditionalLink to="/resetpassword" condition={validateEmail(email)} onClick={handleResetPassword}>password?</ConditionalLink>
            </p>
            <p className="forgot-password text-right">
                New here ? <Link to="/register">Sign up</Link>
            </p>
        </form>
    );
};

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth.isAuthenticated,
      user: state.auth.user,
      errorMsg: state.error.msg
    };
};

const mapActionsToProps = { login, loadQuestion };

export default connect(mapStateToProps, mapActionsToProps)(Login);