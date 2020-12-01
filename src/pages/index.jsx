//libs
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//components
import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
//actions
import { fetchDataCategories } from "../actions/categories";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataCategories());
  }, []);
  return (
    <LayoutOne title="Homepage 1">
      <Banners />
      <ShopLayout
        fiveColumn
        shopSidebarResponsive={{ xs: 24, lg: 4 }}
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6 }}
        productPerPage={15}
        data={[]}
      />
    </LayoutOne>
  );
}
