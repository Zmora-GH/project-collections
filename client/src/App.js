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
    let [isAuth, isAdmin, userId, username, colormode, lang] = [false, false, null, null, "light", "en"]
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
        isAuth = true;
        isAdmin = data.user.staff;
        userId = data.user._id;
        username = data.user.username;
        colormode = data.user.colormode;
        lang = data.user.lang;
    }
    return (
        <AuthContext.Provider value={{ isAuth, isAdmin, username, userId, colormode, lang}}>
        <Router>
            <div className="container">
                <Header />
                    { isAuth ?
                        <Switch>
                            <Route path="/profile/:profileUserName" exact> <Profile /> </Route>
                            {isAdmin ? <Route path="/admin" exact> <Admin /> </Route> : ''}
                            <Route path="/collection/create/:profile_name" exact> <CollectionForm /> </Route> : ''}
                            <Route path="/collection/create_item/:collection_id"> <ItemForm /> </Route> : ''}
                            <Route path="/collection/:collId" exact> <Collection /> </Route>
                            <Route path="/items/:subject" exact> <ItemList /> </Route>
                            <Route path="/search/:subject" exact> <ItemList /> </Route>
                            <Route path="/" exact> <Main /> </Route>
                            <Redirect to="/"/>
                        </Switch>
                        :
                        <Switch>
                            <Route path="/login" exact> <Login /> </Route>
                            <Route path="/signup" exact> <Signup /> </Route>
                            <Route path="/collection/:collId" exact> <Collection /> </Route>
                            <Route path="/items/:subject" exact> <ItemList /> </Route>
                            <Route path="/search/:subject" exact> <ItemList /> </Route>
                            <Route path="/" exact> <Main /> </Route>
                            <Redirect to="/login"/>
                        </Switch>
                    }
                <Footer />
            </div>
        </Router>
        </AuthContext.Provider>
    );
}

export default App;
