import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './util/Login';
import Register from './util/Register';
import AuthRoute from './util/AuthRoute';
import ResetPassword from './util/ResetPassword';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <AuthRoute path="/" component={HomePage} />
      </Switch>      
    </Router>       
  );
}

export default App;
