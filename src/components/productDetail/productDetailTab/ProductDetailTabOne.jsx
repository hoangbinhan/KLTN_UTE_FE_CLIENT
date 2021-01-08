import { Tabs } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../../actions/product";
import { UserContext } from "../../../context/UserContext";
import Container from "../../other/Container";
import ProductDetailComment from "../elements/ProductDetailComment";
import ProductDetailReviewItem from "../elements/ProductDetailReviewItem";
import Parser from "html-react-parser";

const { TabPane } = Tabs;

export default function ProductDetailTabOne() {
  const infoToken = useContext(UserContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { detailProduct } = useSelector(
    (state) => state.product.fetchDetailProduct
  );
  const { isSuccess } = useSelector((state) => state.user.rating);
  useEffect(() => {
    if (slug) {
      dispatch(fetchDetailProduct({ params: { id: slug } }));
    }
  }, [dispatch, slug, isSuccess]);
  return (
    <div className="product-detail-tab-one">
      <Container>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Description" key="1">
            <div className="product-detail-tab-item -description">
              {Parser(`${detailProduct?.detailDescription || " "}`)}
            </div>
          </TabPane>
          <TabPane
            tab={`Customer Reviews(${detailProduct?.comment?.length})`}
            key="2"
          >
            <div className="product-detail-tab-item -review">
              {detailProduct?.comment?.map((item, index) => {
                return <ProductDetailReviewItem key={index} {...item} />;
              })}
              {infoToken?.email && <ProductDetailComment />}
            </div>
          </TabPane>
        </Tabs>
      </Container>
    </div>
  );
}
