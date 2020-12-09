import React from 'react';
import styled from 'styled-components';

import erha from '@/assets/erha.gif';
import logo from '@/assets/logo.svg';

const StyleContainer = styled.div`
	background-color: #292c33;
	display: flex;
	flex-direction: column;
	align-items: center;
	.logo {
		width: 40px;
		height: 40px;
		margin-right: 16px;
	}
`;

const StyledTitle = styled.h1`
	color: #61dafb;
	display: flex;
	align-items: center;
`;

export default function App() {
	return (
		<StyleContainer>
			<StyledTitle>
				<img src={logo} className="logo" />
				<img src={erha} />
				<span>reat</span>
			</StyledTitle>
		</StyleContainer>
	);
}
