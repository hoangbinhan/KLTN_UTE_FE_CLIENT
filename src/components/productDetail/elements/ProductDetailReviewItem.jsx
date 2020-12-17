import { Rate, Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

function ProductDetailReviewItem(props) {
  const { email, comment, rating, date } = props;
  return (
    <div className="product-detail-review-item">
      <div
        className="product-detail-review-item__avatar"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Avatar size={32} icon={<UserOutlined />} />
        <Rate disabled defaultValue={rating} />
      </div>
      <div className="product-detail-review-item__content">
        <h5>{date}</h5>
        <h3>{email}</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default React.memo(ProductDetailReviewItem);
