import React, { useState } from "react";
import LayoutOne from "../../../components/layouts/LayoutOne";
import { Form, Input, Button, message } from "antd";
import Axios from "axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { login, register } from "../../../actions/user";
import { useDispatch } from "react-redux";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const registerPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(
      register({
        data: { ...values },
        cbSuccess: () => {
          setIsLoading(false);
          message.success("Successful");
          dispatch(
            login({
              data: { ...values },
              cbSuccess: (res) => {
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

  return (
    <LayoutOne title="Login">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
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

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </LayoutOne>
  );
};

export default registerPage;
