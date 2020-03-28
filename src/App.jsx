import React from 'react';
import { hot } from 'react-hot-loader/root';

import dva from './dva.png';

function App() {
	return (
		<div>
			<h1 className="red">hello world!!</h1>
			<img src={dva} />
		</div>
	);
}

export default hot(App);
