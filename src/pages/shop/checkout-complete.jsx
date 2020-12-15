import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import { UserContext } from "../../context/UserContext";
import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import { formatVND } from "../../utils";
import { clearOldDataCheckoutComplete } from "../../actions/user";

export default function checkoutComplete() {
  const dispatch = useDispatch();
  const { infoCheckoutComplete } = useSelector(
    (state) => state.user.cartCheckoutComplete
  );
  const infoToken = useContext(UserContext);
  useEffect(() => {
    return () => {
      dispatch(clearOldDataCheckoutComplete());
    };
  }, []);
  return (
    <LayoutOne title="Checkout completed">
      <Container>
        <div className="checkout-complete">
          <div className="checkout-complete-summary">
            <h3>Congratulation! You’ve completed payment.</h3>
            <div className="checkout-complete-summary__table">
              <div className="checkout-complete-summary__table-item">
                <h5>Customer</h5>
                <p>{infoToken?.email}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Date</h5>
                <p>{Moment().format("DD/MM/YYYY")}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Total</h5>
                <p>{formatVND(infoCheckoutComplete?.totalPrice, "VND")}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Payment methods</h5>
                <p>{infoCheckoutComplete?.paymentMethod}</p>
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
                {infoCheckoutComplete?.cart?.map((record) => (
                  <tr key={record.item._id}>
                    <td>
                      {record.item.productName} x {record.quantity}
                    </td>
                    <td className="bold">
                      {formatVND(record.item.price * record.quantity, "VND")}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Subtotal</td>
                  <td className="bold">
                    {formatVND(infoCheckoutComplete?.totalPrice, "VND")}
                  </td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free ship</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td>{infoCheckoutComplete?.paymentMethod}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="bold">
                    {formatVND(infoCheckoutComplete?.totalPrice, "VND")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}
