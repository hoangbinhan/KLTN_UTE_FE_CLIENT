import React, { useState } from "react";
import LayoutOne from "../../../components/layouts/LayoutOne";
import { Form, Input, Button, Checkbox, message } from "antd";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../../../configs/enviroments";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/user";
import Link from "next/link";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const loginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(
      login({
        data: { ...values },
        cbSuccess: (res) => {
          setIsLoading(false);
          const { token, refresh_token } = res.payload.data.token;
          Cookie.set("token", token);
          Cookie.set("refresh_token", refresh_token);
          router.push("/");
        },
        cbError: (err) => {
          message.error(err.message);
          setIsLoading(false);
        },
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            LOGIN
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Link href="/user/register">
            <a>Register</a>
          </Link>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Link href="/user/forgot-password">
            <a>Forgot password</a>
          </Link>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <GoogleLogin
            clientId="162663854679-5dqrk7lvcl6dlh81v1iqou9nvu53b761.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          {/* <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          /> */}
        </Form.Item>
      </Form>
    </LayoutOne>
  );
};

export default loginPage;
