import { useRouter } from "next/router";
import LayoutOne from "../../components/layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetailProduct } from "../../actions/product";
import ProductDetailOne from "../../components/productDetail/ProductDetailOne";

export default function pid() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { detailProduct } = useSelector(
    (state) => state.product.fetchDetailProduct
  );
  useEffect(() => {
    if (slug) {
      dispatch(fetchDetailProduct({ params: { id: slug } }));
    }
  }, [dispatch, slug]);
  return (
    <LayoutOne title="product" clearSpaceTop>
      {detailProduct.status && <ProductDetailOne data={detailProduct} />}
    </LayoutOne>
  );
}
