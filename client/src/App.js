import React from 'react'
import Home from './components/home'
import Calculate from './components/calculate'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div id="main">

      <div>
          <Route path="/" component={Home} />
          <Route path="/calculate" component={Calculate} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
