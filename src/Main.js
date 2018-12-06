import React from 'react'
import { Switch, Route } from 'react-router-dom';
import aline from './pages/users/aline';
import elixir from './pages/users/elixir';
import Home from './pages/home/home';

const Main = () => (
  <main>
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/aline" component={ aline } />
        <Route path="/elixir" component={ elixir } />
    </Switch>
  </main>
)

export default Main
