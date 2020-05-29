import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import routes from './../Components/Helper/Routes';


export default class Main extends Component {
    render() {
        return (
            <div className="App" >
                <Router basename="/" >
                    <React.Suspense>
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })
                                }
                                <Redirect to='/' />
                            </Switch>
                    </React.Suspense>
                </Router>
            </div>
        );
    }

}
