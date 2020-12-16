import React from "react";
import { useSelector } from "react-redux";
import { List, Tag, Row, Col } from "antd";
import Moment from "moment";
import { formatVND } from "../../../utils";
import "./style.scss";

const Order = () => {
  const { listOrders, isLoading } = useSelector(
    (state) => state.information.getOrders
  );
  return (
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
              <List.Item actions={[<a key="list-loadmore-more">View</a>]}>
                <List.Item.Meta
                  title={
                    <a href="https://ant.design">
                      INVOICE: {item._id.slice(0, 8)}
                    </a>
                  }
                  description={Moment(item.dateAdded).format(
                    "DD/MM/YYYY HH:mm"
                  )}
                />
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
  );
};

export default Order;
