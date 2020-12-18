import React, { useContext } from "react";
import { useRouter } from "next/router";
import LayoutOne from "../../components/layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailOrder } from "../../actions/information";
import { UserContext } from "../../context/UserContext";
import Container from "../../components/other/Container";
import { formatVND } from "../../utils";

const detailOrder = () => {
  const infoToken = useContext(UserContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { detail } = useSelector((state) => state.information.getDetailOrder);
  useEffect(() => {
    dispatch(getDetailOrder({ params: { id: slug } }));
  }, [dispatch, slug]);
  return (
    <LayoutOne title="Checkout completed">
      <Container>
        <div className="checkout-complete">
          <div className="checkout-complete-summary">
            <h3>Detail Invoice</h3>
            <div
              className="checkout-complete-summary__table"
              style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <div className="checkout-complete-summary__table-item">
                <h5>Customer</h5>
                <p>{infoToken?.email}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Total</h5>
                <p>{formatVND(detail?.data?.totalDetail.total, "VND")}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Payment methods</h5>
                <p>{detail?.data?.paymentDetail.paymentMethod}</p>
              </div>
            </div>
          </div>
          <div className="checkout-complete-details">
            <h3>Order Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {detail?.data?.productsInvoice?.map((record) => (
                  <tr key={record._id}>
                    <td>
                      {record.productName} x {record.quantity}
                    </td>
                    <td className="bold">
                      {formatVND(record.price * record.quantity, "VND")}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Subtotal</td>
                  <td className="bold">
                    {formatVND(detail?.data?.totalDetail.total, "VND")}
                  </td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free ship</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td>{detail?.data?.paymentDetail.paymentMethod}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="bold">
                    {formatVND(detail?.data?.totalDetail.total, "VND")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
};

export default detailOrder;
