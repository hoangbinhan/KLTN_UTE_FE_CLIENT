import React from "react";
import { useRouter } from "next/router";
import LayoutOne from "../../components/layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductDetailOne from "../../components/productDetail/ProductDetailOne";

const detailOrder = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { detailProduct } = useSelector(
    (state) => state.product.fetchDetailProduct
  );
  useEffect(() => {
    dispatch(fetchDetailProduct({ params: { id: slug } }));
  }, [dispatch, slug]);
  return <div>Day la detail order</div>;
};

export default detailOrder;
