import React, { useEffect } from "react";
import { Tabs } from "antd";
import Orders from "./Orders";
import Infor from "./Info";
import ChangePassword from "./ChangePassword";
import { useDispatch } from "react-redux";
import { getOrders, getInformation } from "../../actions/information";

const { TabPane } = Tabs;

const InformationTabs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
    dispatch(getInformation());
  }, [dispatch]);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Invoices" key="1">
        <Orders />
      </TabPane>
      <TabPane tab="Information" key="2">
        <Infor />
      </TabPane>
      <TabPane tab="Change Password" key="3">
        <ChangePassword />
      </TabPane>
    </Tabs>
  );
};

export default InformationTabs;
