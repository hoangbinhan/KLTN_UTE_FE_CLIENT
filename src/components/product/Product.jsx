import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Rate, Button, Tooltip, Skeleton, message, Modal, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatCurrency } from "../../common/utils";
import {
  checkProductInWishlist,
  checkAvaiableQuantityToAdd,
} from "../../common/shopUtils";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import ShopQuickView from "../shop/ShopQuickView";
import ColumnGroup from "antd/lib/table/ColumnGroup";

function Product({ product, productStyle }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  // const globalState = useSelector((state) => state.globalReducer);
  // const cartState = useSelector((state) => state.cartReducer);
  // const avaiableQuantity = checkAvaiableQuantityToAdd(cartState, data);
  // const { currency, locales } = globalState.currency;
  // useEffect(() => {
  //   setImageLoading(true);
  // }, [globalState.category]);
  const renderProductType = () => {
    if (product.discountPrice) {
      return <p className="product-type -sale">Sale</p>;
    } else if (product.quantity <= 0) {
      return <p className="product-type -new">Sold out</p>;
    } else {
      return null;
    }
  };
  const onAddToCart = (data) => {};
  const onAddToWishlist = (data) => {};
  const renderStyleClass = () => {
    const avaialeStyles = ["one", "two", "three"];
    if (avaialeStyles.includes(productStyle)) {
      if (!productStyle || productStyle === "one") {
        return "-style-one";
      } else {
        return "-style-" + productStyle;
      }
    } else {
      return "-style-one";
    }
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = (e) => {
    setVisible(false);
  };
  const handleImageLoaded = () => {
    setImageLoading(false);
  };
  return product ? (
    <>
      <div className={`product -style-one`}>
        <div className="product-image">
          <Link href={`/product/[slug]`} as={`/product/${product._id}`}>
            <a className={classNames({ loading: imageLoading })}>
              {product.image && (
                <>
                  {product.image[0]?.url ? (
                    <img
                      onLoad={handleImageLoaded}
                      src={product.image[0]?.url}
                      alt="Product image"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <div className="non-image-one-product"></div>
                  )}
                  {product.image[1]?.url ? (
                    <img
                      onLoad={handleImageLoaded}
                      src={product.image[1]?.url}
                      alt="Product image"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <div className="non-image-two-product"></div>
                  )}
                </>
              )}
            </a>
          </Link>
          {imageLoading && (
            <div className="product-image-loading">
              <Spin size="large" />
            </div>
          )}
          {renderProductType()}
          {!productStyle || productStyle === "one" ? (
            <Button onClick={showModal} className="product-qv">
              Quick view
            </Button>
          ) : null}
        </div>
        <div className="product-content">
          <Link
            href={process.env.PUBLIC_URL + `/product/[slug]`}
            as={process.env.PUBLIC_URL + `/product/${product._id}`}
          >
            <a className="product-name">{product.productName}</a>
          </Link>
          <div className="product-rate">
            <Rate defaultValue={5} disabled />
            <span className="product-rate-quantity">{`(${product.quantity})`}</span>
          </div>
          <div className="product-content__footer">
            <div className="product-content__footer-price">
              <h5 className="product-price">{product.price}</h5>
              {product.discountPrice && <span>{product.discountPrice}</span>}
            </div>
            {!productStyle || productStyle === "one" ? (
              <Tooltip title="Add to cart">
                <Button
                  disabled={product.quantity === 0}
                  className="product-atc"
                  type="text"
                  shape="circle"
                  onClick={() => onAddToCart(product)}
                >
                  <i className="icon_bag_alt" />
                </Button>
              </Tooltip>
            ) : null}
          </div>
        </div>
      </div>
      <Modal
        footer={null}
        afterClose={handleCancel}
        onCancel={handleCancel}
        visible={visible}
        width={850}
      >
        <ShopQuickView setModalVisible={setVisible} data={product} />
      </Modal>
    </>
  ) : (
    <Skeleton active />
  );
}

export default React.memo(Product);
