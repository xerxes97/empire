import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav.jsx'
import Home from './components/home/Home.jsx'
import Favorites from './components/favorites/Favorites';
import Visual from './components/visual/visual';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/visual/:branch' render={({match})=> <Visual section={match.params.branch}/>}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
