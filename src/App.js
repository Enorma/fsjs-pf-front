import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Error from "./components/Error";

function App(props) {
    return(
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route component={Error}></Route>
        </Switch>
    );
}

export default App;