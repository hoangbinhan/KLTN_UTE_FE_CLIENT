import React, { useState } from "react";
import LayoutOne from "../../../../components/layouts/LayoutOne";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/router";
import { updatePassword } from "../../../../actions/user";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { baseUrl } from "../../../../configs/enviroments";
import pathName from "../../../../constants/endpoints";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const updatePasswordPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    const token = router.query.id;
    setIsLoading(true);
    Axios.put(
      `${baseUrl}${pathName.UPDATE_PASSWORD}`,
      {
        password: values.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        message.success("Successful");
        router.push("/");
      })
      .catch((err) => {
        setIsLoading(false);
        message.error("something went wrong");
      });
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </LayoutOne>
  );
};

export default updatePasswordPage;
