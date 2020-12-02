//libs
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
//components
import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
//actions
import { fetchDataCategories } from "../actions/home";

export default function Home({ categories }) {
  return (
    <LayoutOne title="Homepage 1">
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

export async function getStaticProps(context) {
  const res = await axios.get(
    `http://localhost:3003/api/client/home/categories`
  );
  const categories = await res.data.data.payload;
  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories },
  };
}
