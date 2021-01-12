import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@yaireo/tagify/dist/tagify.css"
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
    let [isAuth, isAdmin, userId, username] = [false, false, null, null]
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
        isAuth = true;
        isAdmin = data.staff;
        userId = data.id;
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
                    <Route path="/profile/:profileUserName" exact> <Profile /> </Route>
                    {isAdmin ? <Route path="/admin" exact> <Admin /> </Route> : ''}
                    <Route path="/collection/:collId" exact> <Collection /> </Route>
                    <Route path="/items/:tag_name" exact> <ItemList /> </Route>
                    <Route path="/collection/create/:profile_name" exact> <CollectionForm /> </Route>
                    <Route path="/collection/create_item/:collection_id"> <ItemForm /> </Route>
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
