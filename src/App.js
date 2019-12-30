import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

const App = () => (
    <Router>
        <Switch>
          <Route path='/' exact component={Navbar} />
          <Route component={() => (<NotFound />)} />
        </Switch>
    </Router>
);
export default App;
