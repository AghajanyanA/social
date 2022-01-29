import './App.css';
import React from 'react'
import Navbar from './comps/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './routes/Routes';
import 'antd/dist/antd.css'
import HeaderContainer from './comps/Header/HeaderContainer';


function App() {

  return (
    <Router>
      <div className='main'>
        <HeaderContainer />
        <Navbar />
        <div className='content' content-theme='blue' >
          <RenderRoutes />
        </div>
      </div>
    </Router>
  )
}

export default App;