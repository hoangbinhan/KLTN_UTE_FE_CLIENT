import React from "react";
import { useSelector } from "react-redux";
import { Empty, Button } from "antd";
import Link from "next/link";
import CartSidebarItem from "./CartSidebarItem";

function CartSidebar() {
  const { cart } = useSelector((state) => state.user.getCart);
  return cart?.totalQuantity === 0 ? (
    <Empty description="No products in cart" />
  ) : (
    <div className="cart-sidebar">
      <div className="cart-sidebar-products">
        {cart?.cart?.map((item, index) => (
          <CartSidebarItem key={index} data={item} />
        ))}
      </div>
      <div className="cart-sidebar-total">
        <h5>
          Total: <span>{cart?.totalPrice}</span>
        </h5>
        <div className="cart-sidebar-total__buttons">
          <Button type="primary" shape="round">
            <Link href={process.env.PUBLIC_URL + "/shop/checkout"}>
              <a>Checkout</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CartSidebar);
