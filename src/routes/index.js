import React from 'react';
import { Route } from 'react-router-dom';

import basicRoutes from './basic';
import commonRoutes from './common';
import dashboardRoutes from './dashboardRoutes';
import errorRoutes from './errorRoutes';

export const routes = [
	...basicRoutes,
	...commonRoutes,
	...dashboardRoutes,
	...errorRoutes,
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
