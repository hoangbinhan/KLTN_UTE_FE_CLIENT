import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import { useRouter } from "next/router";

export default function checkoutComplete() {
  const router = useRouter();
  const { errorCode, message } = router.query;
  return (
    <LayoutOne title="Checkout completed">
      <Container>
        {errorCode == 0 || errorCode == -2 ? (
          <div className="checkout-complete">
            <div className="checkout-complete-summary">
              <h3>Congratulation! You’ve completed payment.</h3>
            </div>
          </div>
        ) : (
          <div className="checkout-complete">
            <div className="checkout-complete-summary">
              <h3>Some thing went wrong.</h3>
              <h4>
                {message}: Error Code: {errorCode}
              </h4>
            </div>
          </div>
        )}
      </Container>
    </LayoutOne>
  );
}
