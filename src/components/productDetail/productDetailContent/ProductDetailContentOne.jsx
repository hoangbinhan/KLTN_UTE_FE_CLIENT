import React, { useState } from "react";
import { Rate, Button, Radio, Progress, message } from "antd";
import Parser from "html-react-parser";
import Countdown, { zeroPad } from "react-countdown";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatCurrency } from "../../../common/utils";
import { addToCart } from "../../../redux/actions/cartActions";
import { checkAvaiableQuantityToAdd } from "../../../common/shopUtils";
import QuantitySelector from "../../controls/QuantitySelector";
import ProductGuaranteed from "../elements/ProductGuaranteed";
import { stringify } from "uuid";

function ProductDetailContentOne({
  data,
  onAddedToCart,
  hideGuaranteed,
  quantityControllerNoRound,
  showCountdown,
}) {
  const onAddProductToCart = (data) => {};
  const [quantity, setQuantity] = useState();
  return (
    <div className="product-detail-content-one">
      <h3>{data.productName}</h3>
      <div className="product-detail-content-one-rate">
        <Rate disabled defaultValue={5} />
        <span className="product-detail-content-one-review-count">
          - 5 Reviews
        </span>
      </div>
      <div className="product-detail-content-one-price">
        <h5>{data.price}</h5>
        {data.discountPrice && <span>{data.discountPrice}</span>}
      </div>
      <p className="product-detail-content-one-description">
        {Parser(data.description)}
      </p>
      <div className="product-detail-content-one-actions">
        <QuantitySelector
          noRound={quantityControllerNoRound}
          defaultValue={1}
          onChange={(val) => setQuantity(val)}
          size="big"
          // max={checkAvaiableQuantityToAdd(cartState, data)}
        />
        <Button
          onClick={() => onAddProductToCart(data)}
          disabled={data.quantity === 0}
          className={`product-detail-content-one-atc ${classNames({
            disabled: data.avaiableQuantity === 0,
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
