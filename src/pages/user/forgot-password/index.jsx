import React, { useState } from "react";
import LayoutOne from "../../../components/layouts/LayoutOne";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../actions/user";

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
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(
      forgotPassword({
        data: { ...values },
        cbSuccess: () => {
          setIsLoading(false);
          message.success("Please check your email!");
        },
        cbError: () => {
          setIsLoading(false);
          message.error("Wrong email!");
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
          <Input type="email" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </LayoutOne>
  );
};

export default registerPage;
