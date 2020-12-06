import { Row, Col, Breadcrumb } from "antd";
import React from "react";

import Container from "../other/Container";
import ProductDetailContentOne from "./productDetailContent/ProductDetailContentOne";
import ProductDetailTabOne from "./productDetailTab/ProductDetailTabOne";
import ProductDetailImageOne from "./productDetailImage/ProductDetailImageOne";

function ProductDetailLayoutOne({ data }) {
  const onAddedToCart = (data, quantity) => {
    console.log("data", data);
    console.log("quantity", quantity);
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
