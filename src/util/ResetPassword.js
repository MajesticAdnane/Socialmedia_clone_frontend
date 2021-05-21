import './style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyResponse, changePassword, clearResetData } from '../fllux/actions/resetActions';
import { useState, useEffect } from 'react';

const ResetPassword = ({secretQuestion, responseValidated, email, verifyResponse, changePassword, errorMsg, clearResetData}) => {
    const [formData, setformData] = useState('');

    const labelText = (responseValidated !== true) ? secretQuestion ?? 'some error' : 'Enter your new password';
    const inputText = (responseValidated !== true) ? 'Enter your secret response '  : 'new password';

    const onSubmit = (e) => {
        e.preventDefault();

        if (!responseValidated) verifyResponse(email, formData);
        else changePassword(email, formData);
    };

    useEffect(() => {
        if (errorMsg) alert(errorMsg);
    }, [errorMsg])

    return (
        <form className="auth-wrapper auth-inner" onSubmit={onSubmit}>
            <div className="form-group">
                <label>{ labelText }</label>
                <input type="text" className="form-control" placeholder={inputText} 
                    onChange={(e) => setformData(e.target.value)}
                /> <br/>
                <button type="submit" className="btn btn-primary btn-block">Send</button>

                <p onClick={clearResetData} className="forgot-password text-right">
                    <Link to="/login">Go back </Link>
                </p>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        secretQuestion: state.reset.secretQuestion,
        responseValidated: state.reset.responseValidated,
        email: state.reset.email,
        errorMsg: state.error.msg
    };
};

const mapActionsToProps = { verifyResponse, changePassword, clearResetData };

export default connect(mapStateToProps, mapActionsToProps)(ResetPassword);
