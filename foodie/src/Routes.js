import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import About from './containers/About';
import Cart from './containers/Cart';
import Error from './containers/Error';

import Home from './containers/Home';
import Login from './containers/Login';
import Menu from './containers/Menu';
import Promo from './containers/Promo';
import Signup from './containers/Signup';
import Vendors from './containers/Vendors';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/promo' component={Promo} />
                <Route exact path='/vendor' component={Vendors} />
                <Route exact path='/aboutus' component={About} />
                <Route exact path='/menu' component={Menu} />
                <PrivateRoute exact path='/cart' component={Cart} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
};

export default Routes
