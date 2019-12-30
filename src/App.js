import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Notfound from './components/Notfound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

const App = () => (
    <Router>
        <Switch>
          <Route path='/' exact component={Navbar} />
          <Route component={() => (<Notfound />)} />
        </Switch>
    </Router>
);
export default App;
