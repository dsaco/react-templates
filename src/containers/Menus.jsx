import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
	DotChartOutlined,
	TeamOutlined,
	PictureOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';

const menus = [
	{
		title: '数据',
		Icon: DotChartOutlined,
		children: [
			{
				title: '图片',
				Icon: PictureOutlined,
				path: '/pictures',
			},
			{
				title: '影视',
				Icon: VideoCameraOutlined,
				path: '/movies',
			},
		],
	},
	{
		title: '用户',
		Icon: TeamOutlined,
		path: '/users',
	},
];

const generateMenu = (menu) => {
	if (menu.children && menu.children.length) {
		return (
			<Menu.SubMenu
				key={menu.title}
				title={
					<span>
						{menu.Icon && <menu.Icon />}
						<span>{menu.title}</span>
					</span>
				}
			>
				{menu.children.map((child) => {
					return generateMenu(child);
				})}
			</Menu.SubMenu>
		);
	} else {
		return (
			<Menu.Item key={menu.path}>
				<Link to={menu.path}>
					{menu.Icon && <menu.Icon />}
					<span>{menu.title}</span>
				</Link>
			</Menu.Item>
		);
	}
};

export default function Menus() {
	const [selectedKeys, setSelectedKeys] = React.useState([]);
	const location = useLocation();
	React.useEffect(() => {
		if (location.pathname) {
			setSelectedKeys([location.pathname]);
		}
	}, [location.pathname]);
	return (
		<Menu
			theme="dark"
			mode="vertical"
			selectedKeys={selectedKeys}
			onSelect={({ keyPath }) => setSelectedKeys(keyPath)}
		>
			{menus.map((menu) => {
				return generateMenu(menu);
			})}
		</Menu>
	);
}
