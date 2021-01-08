//libs
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
//components
import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import { UserContext } from "../context/UserContext";
//actions
import { addToCart } from "../actions/user";

export default function Home({ categories }) {
  const infoToken = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const pendingCart = JSON.parse(localStorage.getItem("pendingCart"));
    if (pendingCart) {
      if (infoToken?.email) {
        const payload = {
          ...pendingCart,
          email: infoToken?.email,
        };
        dispatch(
          addToCart({
            data: payload,
            cbSuccess: () => {
              localStorage.removeItem("pendingCart");
              message.success("Product added to cart successfully");
            },
            cbError: () => {
              localStorage.removeItem("pendingCart");
              message.error("Product added to cart fail");
            },
          })
        );
      }
    }
  }, [dispatch]);
  return (
    <LayoutOne title="Homepage">
      <Banners />
      <ShopLayout
        fiveColumn
        shopSidebarResponsive={{ xs: 24, lg: 4 }}
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6 }}
        productPerPage={15}
        dataCategories={categories}
      />
    </LayoutOne>
  );
}
