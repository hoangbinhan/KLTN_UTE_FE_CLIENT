import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateInformation } from "../../../actions/information";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const Info = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { information } = useSelector(
    (state) => state.information.getInformation
  );
  useEffect(() => {
    if (information) {
      form.setFieldsValue(information.data);
    }
  }, []);
  const onFinish = (values) => {
    const data = {
      address: values.address,
      name: values.name,
      phoneNumber: values.phoneNumber,
    };
    setIsLoading(true);
    dispatch(
      updateInformation({
        data,
        cbSuccess: () => {
          setIsLoading(false);
          message.success("Update information successfully!");
        },
        cbError: () => {
          setIsLoading(false);
          message.error("Something went wrong!");
        },
      })
    );
  };
  return (
    <Form {...layout} onFinish={onFinish} form={form}>
      <Form.Item name="email" label="Email">
        <Input disabled />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="phoneNumber" label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Info;
