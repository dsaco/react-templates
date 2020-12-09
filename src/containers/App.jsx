import React from 'react';
import { Switch } from 'react-router-dom';

import Layout from './Layout';
import { routes, RouteWithSubRoutes } from '../routes';

export default function App() {
	return (
		<Layout>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</Layout>
	);
}
