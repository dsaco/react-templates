import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import erha from './erha.gif';

const StyledTitle = styled.h1`
	color: #61dafb;
	display: flex;
	align-items: center;
`;

export default function App() {
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
