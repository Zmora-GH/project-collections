import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './common/Header';
import Footer from './common/Footer';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Admin from './admin/Admin';
import Profile from './profile/Profile';
import Main from './main/Main';
import Collection from './collection/Collection';

import {AuthContext} from './core/context';

function App() {
    let isAuth = false;
    let isAdmin = true;

    if (false){
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        );
    } else {
        return (
            <AuthContext.Provider value={{ isAuth, isAdmin }}>
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/login" exact> <Login /> </Route>
                        <Route path="/signup" exact> <Signup /> </Route>
                        <Route path="/admin" exact> <Admin /> </Route>
                        <Route path="/profile" exact> <Profile /> </Route>
                        <Route path="/collection/:id"> <Collection /> </Route>
                        <Route path="/" exact> <Main /> </Route>
                        <Redirect to="/"/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
            </AuthContext.Provider>
        );
    }
}

export default App;
