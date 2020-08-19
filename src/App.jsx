import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import logo from './logo.svg';
import erha from './erha.gif';

const StyledTitle = styled.h1`
	color: #61dafb;
	display: flex;
	align-items: center;
`;

function App() {
	return (
		<div className="background">
			<StyledTitle>
				<img src={logo} className="logo" />
				<img src={erha} />
				<span>React</span>
			</StyledTitle>
		</div>
	);
}

export default hot(App);
