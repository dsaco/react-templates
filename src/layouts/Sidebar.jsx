import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { DashboardOutlined, TeamOutlined } from '@ant-design/icons';

const menus = [
	{
		title: 'Dashboard',
        Icon: DashboardOutlined,
		children: [
			{
				title: '分析页',
				path: '/dashboard/analysis',
			},
			{
				title: '测试',
				path: '/test',
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

export default function Sidebar() {
    const [selectedKeys, setSelectedKeys] = React.useState([]);
    const location = useLocation();
    React.useEffect(() => {
        setSelectedKeys([location.pathname]);
    }, []);
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            onSelect={({ keyPath }) => setSelectedKeys(keyPath)}
        >
            {menus.map((menu) => {
                return generateMenu(menu);
            })}
        </Menu>
    );

}
