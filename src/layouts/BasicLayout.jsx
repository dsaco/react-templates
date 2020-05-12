import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import logo from '../assets/logo.svg';
import Sidebar from './Sidebar';

const { Content, Sider, Header } = Layout;

function BasicLayout({ children }) {
	const [collapsed, setCollapsed] = React.useState(false);

	const toggle = () => {
		setCollapsed((prevCollapsed) => !prevCollapsed);
	};
	return (
		<Layout style={{ height: '100%' }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<Link className="sider-menu-logo" to="/">
					<img src={logo} className="logo" />
					{collapsed ? null : <h1>Ant Design</h1>}
				</Link>
				<Sidebar />
			</Sider>
			<Layout>
				<Header style={{ padding: '0 16px', backgroundColor: 'white' }}>
					{collapsed ? (
						<MenuUnfoldOutlined
							style={{ fontSize: 20 }}
							onClick={toggle}
						/>
					) : (
						<MenuFoldOutlined
							style={{ fontSize: 20 }}
							onClick={toggle}
						/>
					)}
				</Header>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
}

export default BasicLayout;
