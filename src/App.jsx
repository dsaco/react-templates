import React from 'react';
import { hot } from 'react-hot-loader/root';

import logo from './logo.svg';

function App() {
	return (
		<div className="background">
			<h1 className="title">
				<img src={logo} className="logo" />
				<span>React</span>
			</h1>
		</div>
	);
}

export default hot(App);
