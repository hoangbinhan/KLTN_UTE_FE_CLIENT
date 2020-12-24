import React, { useState } from "react";
import { Comment, Avatar, Form, Button, Rate, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { rating } from "../../../actions/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
const { TextArea } = Input;

const ProductDetailComment = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const handleSubmit = (values) => {
    if (!values.rating) {
      message.error("Please rating the product!");
    } else {
      if (!slug) {
        message.error("Some thing went wrong!");
      } else {
        setSubmitting(true);
        dispatch(
          rating({
            data: {
              rating: values.rating,
              comment: values.comment,
              id: slug,
            },
            cbSuccess: () => {
              form.resetFields();
              setSubmitting(false);
            },
            cbError: () => setSubmitting(false),
          })
        );
      }
    }
  };

  return (
    <>
      <Form onFinish={handleSubmit} form={form}>
        <Avatar size={32} icon={<UserOutlined />} />
        <Form.Item name="rating">
          <Rate />
        </Form.Item>
        <Form.Item name="comment">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting}>
            Comment
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductDetailComment;
