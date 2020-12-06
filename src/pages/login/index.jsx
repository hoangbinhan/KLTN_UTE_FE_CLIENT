import React, { useState } from "react";
import LayoutOne from "../../components/layouts/LayoutOne";
import { Form, Input, Button, Checkbox, message } from "antd";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../../configs/enviroments";
import Cookie from "js-cookie";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const loginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    setIsLoading(true);
    Axios({
      method: "post",
      url: `${baseUrl}/api/client/user/login`,
      data: values,
    })
      .then(async (req) => {
        if (req) {
          setIsLoading(false);
          const { token, refresh_token } = req.data.token;
          Cookie.set("token", token);
          Cookie.set("refresh_token", refresh_token);
          router.push("/");
        } else {
          message.error("Access token is null!");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        message.error("Login fail");
        setIsLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <LayoutOne title="Login">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            LOGIN
          </Button>
          <a href="#">Forgot password</a>
          <a href="#">Register</a>
        </Form.Item>
        <Form.Item>
          <GoogleLogin
            clientId="162663854679-5dqrk7lvcl6dlh81v1iqou9nvu53b761.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Form.Item>
      </Form>
    </LayoutOne>
  );
};

export default loginPage;
