import React from "react";
import { useSelector } from "react-redux";
import { List, Tag, Row, Col } from "antd";
import Moment from "moment";
import { formatVND } from "../../../utils";
import Link from "next/link";
import "./style.scss";

const Order = () => {
  const { listOrders, isLoading } = useSelector(
    (state) => state.information.getOrders
  );
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Invoices</h1>
      <Row justify="center">
        <Col xs={22} sm={18} md={18} lg={16} xl={16} xxl={16}>
          <List
            className="demo-loadmore-list"
            loading={isLoading}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={listOrders?.data}
            renderItem={(item) => {
              return (
                <List.Item
                  actions={[
                    <Link
                      href={`/detail-order/[slug]`}
                      as={`/detail-order/${item._id}`}
                    >
                      <a key="list-loadmore-more">View</a>
                    </Link>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Link
                        href={`/detail-order/[slug]`}
                        as={`/detail-order/${item._id}`}
                      >
                        <a>INVOICE: {item._id.slice(0, 8)}</a>
                      </Link>
                    }
                    description={Moment(item.dateAdded).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  />
                  <div>
                    {item.momoUrl && (
                      <div
                        className="url-momo"
                        onClick={() => (document.location.href = item.momoUrl)}
                      >
                        link checkout momo
                      </div>
                    )}
                  </div>
                  <div style={{ marginRight: "2rem" }}>
                    Total: {formatVND(item.total, "VND")}
                  </div>
                  <Tag>{item.status}</Tag>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Order;
