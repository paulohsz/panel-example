import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


const routes = () => {
	return (
		<Switch>
            <Route path="/" component ={Home} />
			<Route path="*" component ={() => (<>Teste 2</>)} />
		</Switch>
	);
}

export default routes;