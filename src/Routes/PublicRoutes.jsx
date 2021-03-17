import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shirts from '../components/Shirts';
import SingleShirt from '../components/SingleShirt';
import Navbar from '../components/Navbar';

export default function PublicRoutes() {
    return (
        <div>
            <Route path="/" component={Navbar} />
            
            <Switch>
                <Route path="/shirts" component={Shirts} />
                <Route path="/shirts/:id" component={SingleShirt} />
                <Route render={() => <h3>Page not found</h3>} />
            </Switch>
        </div>
    );
}
