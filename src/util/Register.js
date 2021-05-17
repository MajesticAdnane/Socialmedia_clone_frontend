import './style.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../fllux/actions/authActions';
import { connect } from "react-redux";

const Register = ({history, register, isAuthenticated, errorMsg}) => {

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [question, setQuestion] = useState();
   const [response, setResponse] = useState();

   const onSubmit = (e) => {
      e.preventDefault();
      if(!email || !password || !firstName || !lastName || !question || !response) alert('You must fill all the fields');
      else {
         const newUser = {
            email,
            password,
            firstName,
            lastName,
            secretQuestion: question,
            secretResponse: response   
         };

         register(newUser);
      }
   };

   useEffect(() => {
      if (isAuthenticated) {
         history.push("/");
      }
      else if (errorMsg) alert(errorMsg);
   }, [history, errorMsg]);

   return (
      <form className="auth-wrapper auth-inner" onSubmit={onSubmit}>
         <h3>Sign Up</h3>

         <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name"
               onChange={(e) => {
                  setFirstName(e.target.value);
               }}
            />
         </div>

         <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" 
               onChange={(e) => {
                  setLastName(e.target.value);
               }}
            />
         </div>

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
            <label>Secret Question</label>
            <input type="text" className="form-control" placeholder="Secret Question" 
               onChange={(e) => {
                  setQuestion(e.target.value);
               }}
            />
         </div>

         <div className="form-group">
            <label>Secret Response</label>
            <input type="text" className="form-control" placeholder="Secret Response" 
               onChange={(e) => {
                  setResponse(e.target.value);
               }}
            />
         </div>

         <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
         <p className="forgot-password text-right">
            Already registered <Link to="/login">Sign in ?</Link>
         </p>
      </form>
   );
};

const mapStateToProps = (state) => {
   return {
      errorMsg: state.error.msg,
      isAuthenticated: state.auth.isAuthenticated
   };
};

const mapActionsToProps = { register };

export default connect(mapStateToProps, mapActionsToProps)(Register);