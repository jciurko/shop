import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const CustomLayout = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu style={{ float: "right" }} theme="dark" mode="horizontal">
          {props.isAuthenticated ? (
            <Menu.Item key="1">Logout</Menu.Item>
          ) : (
            <Menu.Item key="1">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
