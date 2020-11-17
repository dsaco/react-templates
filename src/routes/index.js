import React from 'react';
import { Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import MovieList from '@/pages/MovieList';

export const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		exact: true,
	},
	{
		path: '/movies',
		component: MovieList,
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
