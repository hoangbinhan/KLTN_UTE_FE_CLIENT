import React, { useEffect } from "react";
import { Tabs } from "antd";
import Orders from "./Orders";
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
      <TabPane tab="Tab 1" key="1">
        <Orders />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Information
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Change Password
      </TabPane>
    </Tabs>
  );
};

export default InformationTabs;
