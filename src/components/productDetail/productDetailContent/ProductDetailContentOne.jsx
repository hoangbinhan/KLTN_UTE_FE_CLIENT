import React, { useState } from "react";
import { Rate, Button } from "antd";
import Parser from "html-react-parser";
import classNames from "classnames";
import QuantitySelector from "../../controls/QuantitySelector";
import { formatVND } from "../../../utils";

function ProductDetailContentOne({
  data,
  onAddedToCart,
  quantityControllerNoRound,
}) {
  const onAddProductToCart = (data, quantity) => {
    onAddedToCart(data, quantity);
  };
  const [quantity, setQuantity] = useState();
  return (
    <div className="product-detail-content-one">
      <h3>{data.productName}</h3>
      <div className="product-detail-content-one-rate">
        <Rate disabled defaultValue={data?.rating || 5} />
        <span className="product-detail-content-one-review-count">
          - {data?.comment.length} Reviews
        </span>
      </div>
      <div className="product-detail-content-one-price">
        <h5>{formatVND(data.price, "VND")}</h5>
        {data.discountPrice && (
          <span>{formatVND(data.discountPrice, "VND")}</span>
        )}
      </div>
      <div className="product-detail-content-one-description">
        {Parser(`${data.description}`)}
      </div>
      <div className="product-detail-content-one-actions">
        <QuantitySelector
          noRound={quantityControllerNoRound}
          defaultValue={1}
          onChange={(val) => setQuantity(val)}
          size="big"
          max={data.quantity}
        />
        <Button
          onClick={() => onAddProductToCart(data, quantity)}
          disabled={data.quantity === 0}
          className={`product-detail-content-one-atc ${classNames({
            disabled: data.quantity <= 0,
          })}`}
          type="link"
          danger
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default React.memo(ProductDetailContentOne);
