import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
const aline = lazy(() => import('./pages/users/aline'));
const elixir = lazy(() => import('./pages/users/elixir'));
const Home = lazy(() => import('./pages/home/home'));

const Routes = () => (
  <main>
    <Switch>
        <Suspense fallback={ <h1>Carregando...</h1> }>
        <Route path="/" component={ Home } />
        <Route path="/aline" component={ aline } />
        <Route path="/elixir" component={ elixir } />
        </Suspense>
    </Switch>
  </main>
)

export default Routes
