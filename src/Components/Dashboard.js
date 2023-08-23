//codepen , ant design

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  BookOutlined,
  UserOutlined,
  BulbOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'My Profile',
    link: '/Dashboard/My_Profile',
  },
  {
    key: '2',
    icon: <BulbOutlined />,
    label: 'View Ideas',
    link: '/View_ideas',
  },
  {
    key: '3',
    icon: <BookOutlined />,
    label: 'About Ideate',
    link: '/About_us',
  },
  {
    key: '4',
    icon: <PhoneOutlined />,
    label: 'Contact',
    link: '/Dashboard/Contact',
  },
  
  {
    key: '5',
    icon: <LogoutOutlined />,
    label: 'Log Out',
    link: '/Login',
  }
 
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: '#4096ff',height:"613px" }}
        
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            background: '#4096ff',
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'white',
            marginTop: '50px',
          }}
        >
          {menuItems.map((menuItem) => (
            <Menu.Item
              key={menuItem.key}
              icon={menuItem.icon}
              style={{ marginTop: '10px' }}
            >
              <Link
                to={menuItem.link}
                style={{ fontFamily: "'Borel', cursive" }}
              >
                {menuItem.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#1677ff',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:'white'
            }}
          />
          <Link to="/Dashboard" style ={{float:'right', marginRight:'20px', fontSize:'18px', fontWeight:'bold' ,color:'white' , fontFamily:"'Borel', cursive" }}>Ideate</Link>
       </Header>
        <Content
          style={{
            margin: '0px 0px',
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
