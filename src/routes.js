import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


const routes = () => {
	return (
		<Switch>
            <Route path="/" component ={Home} exact />
            <Route path="/login" component ={Login} />
			<Route path="*" component ={() => (<>Not Found Error 404!</>)} />
		</Switch>
	);
}

export default routes;