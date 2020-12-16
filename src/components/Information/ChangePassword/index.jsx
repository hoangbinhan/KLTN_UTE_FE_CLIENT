import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../actions/information";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(
      changePassword({
        data: {
          password: values.password,
        },
        cbSuccess: () => {
          form.resetFields();
          message.success("Change password successfully!");
          setIsLoading(false);
        },
        cbError: () => {
          message.error("Something went wrong!");
          setIsLoading(false);
        },
      })
    );
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Change Password
      </h1>
      <Form {...layout} onFinish={onFinish} form={form}>
        <Form.Item label="Password" name="password">
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
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePassword;
