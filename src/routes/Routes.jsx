import React from "react";
import { Switch, Route } from 'react-router-dom'
import Profile from '../comps/Profile/Profile'
import Music from "../comps/Music/Music";
import News from '../comps/News/News'
import MessagesContainer from "../comps/Messages/MessagesContainer";
import UsersContainer from "../comps/Users/UsersContainer";
import VisitProfileContainer from '../comps/Profile/ProfileVisited/VisitProfileContainer'
import SettingsContainer from "../comps/Settings/SettingsContainer";
import Login from "../comps/Login/Login";

const RenderRoutes = (props) => (
    <Switch>
        <Route exact path='/profile'>
            <Profile />
        </Route>
        <Route path='/messages'>
            <MessagesContainer />
        </Route>
        <Route path='/music'>
            <Music />
        </Route>
        <Route path='/news'>
            <News />
        </Route>
        <Route path='/settings'>
            <SettingsContainer />
        </Route>
        <Route path='/users'>
            <UsersContainer />
        </Route>
        <Route path='/profile/:id'>
            <VisitProfileContainer />
        </Route>
        <Route path='/login'>
            <Login />    
        </Route> 
    </Switch>
)

export default RenderRoutes