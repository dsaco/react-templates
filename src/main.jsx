import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import App from '@/pages/App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root')
);
