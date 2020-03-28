import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';

export const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/test',
		component: Test,
		exact: true,
	},
];

export const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};

export function Root() {
	return (
		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</Switch>
	);
}
