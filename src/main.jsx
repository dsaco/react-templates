import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import store from './stores';
import { Root } from './routes';
import './styles/main.scss';

const App = hot(Root);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.querySelector('#root')
);
