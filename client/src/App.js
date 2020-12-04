import React from 'react'
import Home from './components/home'
import Calculate from './components/calculate'
import {Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Route path="/" component={ Home } />
      <Route path="/calculate" component={ Calculate } />
    </>
  );
}

export default App;
