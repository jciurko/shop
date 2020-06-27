import React from "react";
import { Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
const { Header, Content } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu style={{ float: "right" }} theme="dark" mode="horizontal">
            {console.log(`state is `)}
            {console.log(this)}
            {console.log(this.props)}

            {this.props.isAuthenticated === true
              ? (console.log(`isAuthenticated: ${this.props.isAuthenticated}`),
                (
                  <Menu.Item key="2" onClick={this.props.logout}>
                    Logout
                  </Menu.Item>
                ))
              : (console.log(`isAuthenticated: ${this.props.isAuthenticated}`),
                (
                  <Menu.Item key="1">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                ))}
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
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
