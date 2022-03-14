import './App.css';
import React from 'react'
import Navbar from './comps/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './routes/Routes';
import 'antd/dist/antd.css'
import HeaderContainer from './comps/Header/HeaderContainer';
import { connect } from 'react-redux';


function App() {
  let themeLocalStorage
  if (!window.localStorage.theme) {
      themeLocalStorage = 'blue'
  }
  else { themeLocalStorage = JSON.parse(window.localStorage.theme) }
  return (
    <Router>
      <div className='main' data-theme={themeLocalStorage}>
        <HeaderContainer />
        <Navbar />
        <div className='content' >
          <RenderRoutes />
        </div>
      </div>
    </Router>
  )
}
const mstp = state => {
  return {
    theme: state.settings.theme
  }
}

export default connect(mstp)(App);