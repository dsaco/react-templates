import React from 'react';
import { Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Layout from './Layout';
import { routes, RouteWithSubRoutes } from '../routes';

function App() {
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

export default hot(App);
