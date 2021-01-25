import React from 'react';
import { useTranslation } from 'react-i18next';
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
import CollectionTable from './collection/CollectionTable';
import CollectionForm from './collection/CollectionForm';
import ItemList from './items/ItemList';
import ItemForm from './items/ItemForm';
import {AuthContext, ColorContext, colormods} from './core/context';

function App() {
    const { t, i18n } = useTranslation();

    let isAuth, isAdmin, userId, username, colormode, lang;
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
        isAuth = true;
        isAdmin = data.user.staff;
        userId = data.user._id;
        username = data.user.username;
        colormode = data.user.colormode;
        lang = data.user.lang;
    } else {
        isAuth = false;
        isAdmin = false;
        userId = null
        username = null
        colormode = 'light'
        lang = 'en'
    }

    if ( localStorage.getItem('langData') === null ) {
        localStorage.setItem('langData', lang)
    }

    let tmpcolor = '';
    if (localStorage.getItem('colorData')) {
        tmpcolor = JSON.parse(localStorage.getItem('colorData'));
    } else {
        tmpcolor = colormods[colormode];
        localStorage.setItem('colorData', JSON.stringify(tmpcolor))
    }
    const [state, setState] = React.useState( {colormode: tmpcolor} )
    const togleColormode = () => { setState((state) => {
        let tmp = (state.colormode.name === 'light') ? colormods.dark : colormods.light;

        localStorage.setItem('colorData', JSON.stringify(tmp));
        return {colormode: tmp};
    })}

    return (
        <AuthContext.Provider value={{ isAuth, isAdmin, username, userId, colormode, lang}}>
        <ColorContext.Provider value={{colormode: state.colormode, togleColormode: togleColormode }}>
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
                            <Route path="/table/:collId" exact> <CollectionTable /> </Route>
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
        </ColorContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
