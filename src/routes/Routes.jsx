import React from "react";
import { Switch, Route } from 'react-router-dom'
import Profile from '../comps/Profile/Profile'
import Music from "../comps/Music/Music";
import News from '../comps/News/News'
import Settings from "../comps/Settings/Settings";
import MessagesContainer from "../comps/Messages/MessagesContainer";
import UsersContainer from "../comps/Users/UsersContainer";

const RenderRoutes = () => {
    return (
        <Switch>
            <Route path='/profile'>
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
                <Settings />
            </Route>
            <Route path='/users'>
                <UsersContainer />
            </Route>
        </Switch>
    )
}

export default RenderRoutes