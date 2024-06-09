//codepen , ant design

// In users page all users must be visible whi have created their account andd their info is in db



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
import { Layout, Menu, Button, theme,Dropdown, Space, Row,Col } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;






const Dashboard = () => {
  const location = useLocation();
  
 

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
  }
  
const items = [
  {
    key: '1',
    label: (
      <Link to="/login" onClick={handleLogOut}  style={{ marginRight: '20px', fontSize: '18px', fontWeight: 'bold', color: 'Blue', fontFamily: "'Borel', cursive" }}>Log Out</Link>
    ),
  },
];
const menuItems = [
 
  {
    key: '2',
    icon: <BulbOutlined />,
    label: 'View Ideas',
    link: '/see',
  },
  
  {
    key: '4',
    icon: <PhoneOutlined />,
    label: 'Contact',
    link: '/contact',
  },
  {
    key: '7',
    icon: <BookOutlined />,
    label: 'Add Idea',
    link: '/addIdea',
  },
  {
    key: '5',
    icon: <UserOutlined />,
    label: 'My Profile',
    link: '/MyProfile',
  },
  {
    key: '6',
    icon: <UserOutlined />,
    label: 'Ideas Posted',
    link: '/User',
  },


];
  return (
    <Layout style ={{height:"100vh"}}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: '#4096ff',height:"100vh" }}
        
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          style={{
            background: '#4096ff',
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'white',
            marginTop: '50px'
          }}
          selectedKeys={[location.pathname]}
        >
          {menuItems.map((menuItem) => (
            <Menu.Item
              key={menuItem.link}
              icon={menuItem.icon}
              style={{ marginTop: '10px'  ,backgroundColor: location.pathname === menuItem.link ? 'lightblue' : 'transparent',
            }}
            >
              <Link
                to={menuItem.link}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: 'white',
                }}
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
          <Row>
            <Col span={20}>
         
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              color:'white'
            }}
          />
           </Col>
           <Col span={4} style ={{textAlign:"right" ,paddingRight:"20px"}}>
          <Dropdown
    menu={{
      items,
    }}
  >
    <Link onClick={(e) => e.preventDefault()} className="dropdown-link">
      <Space className="dropdown-link-text" style={{fontSize:"18px", fontWeight:"bold", fontFamily: "'Montserrat', sans-serif"}}>
        Ideate
      </Space>
    </Link>
  </Dropdown>
  </Col>
  </Row>
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
