import React, { useState } from "react";
import { Comment, Avatar, Form, Button, Rate, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const ProductDetailComment = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = () => {
    // if (!this.state.value) {
    //   return;
    // }
    // this.setState({
    //   submitting: true,
    // });
  };
  const handleChange = (e) => {
    // this.setState({
    //   value: e.target.value,
    // });
  };
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <Rate />
      </Form.Item>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  return (
    <Comment
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      content={
        <Editor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          //   value={value}
        />
      }
    />
  );
};

export default ProductDetailComment;
