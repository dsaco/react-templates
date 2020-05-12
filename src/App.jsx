import React from 'react';
import { Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import BasicLayout from './layouts/BasicLayout';
import { routes, RouteWithSubRoutes } from './routes';

import './styles/main.scss';

function App() {
	return (
		<BasicLayout>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</BasicLayout>
	);
}

export default hot(App);
