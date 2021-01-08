import React, { useContext, useState } from "react";
import Link from "next/link";
import { Rate, Button, Tooltip, Skeleton, Modal, Spin, message } from "antd";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import ShopQuickView from "../shop/ShopQuickView";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { addToCart } from "../../actions/user";
import { formatVND } from "../../utils";

function Product({ product, productStyle }) {
  const router = useRouter();
  const infoToken = useContext(UserContext);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const renderProductType = () => {
    if (product.quantity <= 0) {
      return <p className="product-type -new">Sold out</p>;
    }
    if (product.discountPrice) {
      return <p className="product-type -sale">Sale</p>;
    }
    return null;
  };
  const onAddToCart = (data) => {
    if (infoToken?.email) {
      const payload = {
        email: infoToken?.email,
        product: data._id,
        quantity: 1,
      };
      dispatch(
        addToCart({
          data: payload,
          cbSuccess: () =>
            message.success("Product added to cart successfully"),
          cbError: () => message.error("Product added to cart fail"),
        })
      );
    } else {
      const payload = {
        product: data._id,
        quantity: 1,
      };
      localStorage.setItem("pendingCart", JSON.stringify(payload));
      router.push({
        pathname: "/user/login",
      });
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
              <h5 className="product-price">
                {formatVND(product.price, "VND")}
              </h5>
              {product.discountPrice && (
                <span>{formatVND(product.discountPrice, "VND")}</span>
              )}
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
