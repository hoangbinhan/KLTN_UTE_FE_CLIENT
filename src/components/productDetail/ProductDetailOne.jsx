import { Row, Col, Breadcrumb, message } from "antd";
import React, { useContext } from "react";
import Container from "../other/Container";
import ProductDetailContentOne from "./productDetailContent/ProductDetailContentOne";
import ProductDetailTabOne from "./productDetailTab/ProductDetailTabOne";
import ProductDetailImageOne from "./productDetailImage/ProductDetailImageOne";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { addToCart } from "../../actions/user";
import { useDispatch } from "react-redux";

function ProductDetailLayoutOne({ data }) {
  const router = useRouter();
  const infoToken = useContext(UserContext);
  const dispatch = useDispatch();

  const onAddedToCart = (data, quantity) => {
    if (infoToken?.email) {
      const payload = {
        email: infoToken?.email,
        product: data._id,
        quantity: quantity,
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
      router.push("/user/login");
    }
  };
  return (
    <div className="product-detail-one">
      <div className="product-detail-one-top">
        <Container>
          <Breadcrumb className="product-detail-breadcrumb" separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            <Breadcrumb.Item>{data.productName}</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={70}>
            <Col span={24} md={12}>
              <ProductDetailImageOne imageData={data.image} />
            </Col>
            <Col span={24} md={12}>
              <ProductDetailContentOne
                data={data}
                quantityControllerNoRound
                onAddedToCart={onAddedToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product-detail-one-bottom">
        <ProductDetailTabOne />
      </div>
    </div>
  );
}

export default React.memo(ProductDetailLayoutOne);
