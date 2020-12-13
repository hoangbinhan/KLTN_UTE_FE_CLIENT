//libs
import { useState, useEffect } from "react";
import { Row, Col, Empty, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Product from "../product/Product";
import queryString from "query-string";
import { useRouter } from "next/router";
//actions
import { fetchDataProducts } from "../../actions/home";

function ShopContentProduct({ productResponsive, fiveColumn, productStyle }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { listProducts } = useSelector((state) => state.home.fetchDataProducts);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const onChangePagination = (page, pageSize) => {
    const currentParam = { ...router.query, page, size: pageSize };
    router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
  };
  useEffect(() => {
    dispatch(fetchDataProducts({ params: router.query }));
  }, [dispatch, router.query]);
  return (
    <div className="shop-content__product">
      {!listProducts.data ? (
        <Empty description="No products in this category" />
      ) : (
        <>
          {listProducts.data?.length > 0 ? (
            <>
              <Row gutter={[{ xs: 5, sm: 5, xl: 15, xxl: 30 }, 30]}>
                {listProducts.data?.map((product) => (
                  <Col
                    key={product._id}
                    className={classNames({ "five-col": fiveColumn })}
                    {...productResponsive}
                  >
                    <Product product={product} productStyle={productStyle} />
                  </Col>
                ))}
              </Row>
              {listProducts && (
                <Pagination
                  classNames="shop-content__product-pagination"
                  defaultCurrent={1}
                  current={listProducts.page + 1}
                  total={listProducts.total}
                  pageSize={listProducts.size}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  onChange={onChangePagination}
                />
              )}
            </>
          ) : (
            <Empty />
          )}
        </>
      )}
    </div>
  );
}

export default React.memo(ShopContentProduct);
