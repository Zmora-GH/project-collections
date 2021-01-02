import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './main/Header';
import Footer from './main/Footer';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Admin from './admin/Admin';
import Profile from './profile/Profile';
import Main from './main/Main';
import Collection from './collection/Collection';
import CollectionForm from './collection/CollectionForm';
import ItemList from './items/ItemList';
import ItemForm from './items/ItemForm';
import {AuthContext} from './core/context';

function App() {
    let [isAuth, isAdmin, userId, token, username] = [false, false, null, null, null]
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
        isAuth = true;
        isAdmin = data.staff;
        userId = data.id;
        token = data.token;
        username = data.username;
    }
    return (
        <AuthContext.Provider value={{ isAuth, isAdmin, username, userId}}>
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/login" exact> <Login /> </Route>
                    <Route path="/signup" exact> <Signup /> </Route>
                    <Route path="/profile" > <Profile /> </Route>
                    {isAdmin ? <Route path="/admin" exact> <Admin /> </Route> : ''}
                    <Route path="/collection/:id"> <Collection /> </Route>
                    <Route path="/items/:tag_slug"> <ItemList /> </Route>
                    <Route path="/iform/"> <ItemForm /> </Route>
                    <Route path="/cform/"> <CollectionForm /> </Route>
                    <Route path="/" exact> <Main /> </Route>
                    <Redirect to="/"/>
                </Switch>
                <Footer />
            </div>
        </Router>
        </AuthContext.Provider>
    );
}

export default App;
