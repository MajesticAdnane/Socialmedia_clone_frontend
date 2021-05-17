import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import NewsFeed from'./NewsFeed';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route 
                        path="/"
                        exact
                        component={NewsFeed}
                    />
                </Switch>
            </Router>
        </>
    );
};

export default HomePage;