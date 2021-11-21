import React from "react";
import { Switch, Route } from 'react-router-dom'
import Profile from './../comps/Profile/Profile'
import Messages from './../comps/Messages/Messages'
import Music from "../comps/Music/Music";
import News from '../comps/News/News'
import Settings from "../comps/Settings/Settings";

const RenderRoutes = ({state, dispatch}) => {
    return (
        <Switch>
            <Route path='/profile'>
                <Profile state={state} dispatch={dispatch} />
            </Route>
            <Route path='/messages'>
                <Messages state={state.messagesPage} dispatch={dispatch}/>
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
            
        </Switch>
    )
}

export default RenderRoutes