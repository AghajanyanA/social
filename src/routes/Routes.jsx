import React from "react";
import { Switch, Route } from 'react-router-dom'
import Profile from './../comps/Profile/Profile'
import Messages from './../comps/Messages/Messages'
import Music from "../comps/Music/Music";
import News from '../comps/News/News'
import { Settings } from "../comps/Settings/Settings";

export const RenderRoutes = () => {
    return (
        <Switch>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route path='/messages'>
                <Messages />
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
            <Route path='/'>
                <Profile />
            </Route>
            
        </Switch>
    )
}