import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { loadUser } from '../fllux/actions/authActions';

import JwtDecode from "jwt-decode";

const AuthRoute = ({ component: Component, authenticated, loadUser, ...rest }) => {

  return (
      <Route
        {...rest}
        render={(props) => {
          if(authenticated === true) return <Component {...props} />;
          const token = localStorage.getItem('token');
          if (token) {
            const decodedToken = JwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
              //ms7o
              //window.location.href = "/login";
              localStorage.removeItem('token');
              return <Redirect to="/login"/>
            } else {
              loadUser();
              //return <Component {...props}/>
            }
          } else return <Redirect to="/login"/>
          /*authenticated !== true ? (
            <Redirect to="/login" />
          ) : (
            <Component {...props} />
          )*/
        }
          
        }
      />
    );
};

const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.isAuthenticated,
    };
};

const mapActionsToProps = { loadUser };
  
export default connect(mapStateToProps, mapActionsToProps)(AuthRoute);