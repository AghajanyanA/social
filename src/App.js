import './App.css';
import React from 'react'
import Header from './comps/Header/Header';
import Navbar from './comps/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './routes/Routes';
import 'antd/dist/antd.css'

function App({store}) {
  
  return (
    <Router>
      <div className='main'>
        <Header state={store.getState().header} />
        <Navbar />
        <div className='content'>
          <RenderRoutes state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </div>
      </div>
    </Router>
  )
}

export default App;