import React from 'react'
import Home from './components/home'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route path="/" component={ Home } />
    </>
  );
}

export default App;
