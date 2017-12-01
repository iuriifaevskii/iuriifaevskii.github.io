import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import MainPage from './pages/MainPage';
import NewItemPage from './pages/NewItemPage';
import SingleItemPage from './pages/SingleItemPage';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={`/`} component={MainPage} />
                <Route exact path={`/items`} component={MainPage} />
                <Route exact path={`/items/new`} component={NewItemPage} />
                <Route exact path={`/items/:id`} component={SingleItemPage} />
                <Route exact path={`/*`} component={NotFound} />
            </Switch>
        </HashRouter>
    );
}

export default App;
