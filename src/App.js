import './App.css';
import React from 'react'
import Header from './comps/Header/Header';
import Navbar from './comps/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import RenderRoutes from './routes/Routes';

function App() {
  return (
    <Router>
    <div className='main'>
      <Header />
      <Navbar />
      <div className='content'>
        <RenderRoutes />
      </div>
    </div>
    </Router>
  )
}

export default App;