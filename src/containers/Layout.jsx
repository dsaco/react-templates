import React, { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Menus from './Menus';

const StyledLogo = styled.div`
	height: 64px;
	padding: 16px;
	div {
		background-color: rgba(255, 255, 255, 0.3);
		height: 100%;
	}
`;

export default function Layout({ children }) {
	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => setCollapsed((prev) => !prev);

	return (
		<AntLayout style={{ height: '100%' }}>
			<AntLayout.Sider trigger={null} collapsible collapsed={collapsed}>
				<StyledLogo>
					<div></div>
				</StyledLogo>
				<Menus />
			</AntLayout.Sider>
			<AntLayout>
				<AntLayout.Header
					style={{ paddingLeft: 24, backgroundColor: 'white' }}
				>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: toggle,
							style: {
								fontSize: 16,
							},
						}
					)}
				</AntLayout.Header>
				{children}
			</AntLayout>
		</AntLayout>
	);
}
