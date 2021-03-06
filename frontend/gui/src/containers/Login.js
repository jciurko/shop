import React from "react";
import { Form, Input, Button, Spin, Checkbox } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
const NormalLoginForm = (props) => {
  const [form] = Form.useForm();
  console.log(props);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(props.isAuthenticated);
    console.log(props.match);
    props.onAuth(values.username, values.password);
  };
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p style={{ color: "red" }}>{props.error.message}</p>;
  }

  return (
    <div>
      {errorMessage}
      {props.loading ? (
        <Spin indicator={Spin} />
      ) : (
        <Form
          form={form}
          style={{ minWidth: "10rem", maxWidth: "30rem", margin: "auto" }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <p className="login-form-forgot">Forgot password</p>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/signup"> Sign Up!</a>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
