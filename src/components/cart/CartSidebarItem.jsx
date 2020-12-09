import React, { useState } from "react";
import Link from "next/link";
import { Modal, message } from "antd";
import { useDispatch } from "react-redux";
import QuantitySelector from "../controls/QuantitySelector";
import { updateCart, deleteCart } from "../../actions/user";
//TODO.
function CartSidebarItem({ data }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const onRemoveProductFromCart = (e) => {
    e.preventDefault();
    showModal();
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    dispatch(removeFromCart(data.cartId));
    setVisible(false);
    return message.success("Product removed from cart");
  };
  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <>
      <div className="cart-sidebar-item">
        <div className="cart-sidebar-item__image">
          <img src={data.item.image[0].url} alt="Product image" />
        </div>
        <div className="cart-sidebar-item__content">
          <Link href={`/product/[slug]`} as={`/product/${data.item._id}`}>
            <a>{data.item.productName}</a>
          </Link>
          <h5>{data.quantity * data.item.price}</h5>
          <QuantitySelector
            size="small"
            defaultValue={data.quantity}
            min={1}
            max={data.item.quantity}
            onDecrease={() => dispatch(decreaseQuantityCart(data.cartId))}
            onIncrease={() => dispatch(increaseQuantityCart(data.cartId))}
          />
        </div>
        <div className="cart-sidebar-item__close">
          <a href="#" onClick={onRemoveProductFromCart}>
            <i className="icon_close" />
          </a>
        </div>
      </div>
      <Modal
        title="Cofirm this action"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are your sure to remove product from cart ?</p>
      </Modal>
    </>
  );
}

export default React.memo(CartSidebarItem);
