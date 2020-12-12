import React, { useContext, useState } from "react";
import Link from "next/link";
import { Modal, message } from "antd";
import { useDispatch } from "react-redux";
import QuantitySelector from "../controls/QuantitySelector";
import { updateCart, deleteCart } from "../../actions/user";
import { UserContext } from "../../context/UserContext";
import { formatVND } from "../../utils";
//TODO.
function CartSidebarItem({ data }) {
  const infoToken = useContext(UserContext);
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
    if (infoToken?.email) {
      dispatch(
        deleteCart({
          data: {
            email: infoToken?.email,
            id: data.item?._id,
          },
          cbSuccess: () => message.success("Successful"),
          cbError: () => message.error("Some thing went wrong"),
        })
      );
      setVisible(false);
    } else {
      message.error("Some thing went wrong");
    }
  };
  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleUpdateCart = (quantity) => {
    if (infoToken?.email) {
      dispatch(
        updateCart({
          data: {
            email: infoToken?.email,
            id: data.item?._id,
            quantity: quantity,
          },
          cbSuccess: () => message.success("Successful"),
          cbError: () => message.error("Some thing went wrong"),
        })
      );
    } else {
      message.error("Some thing went wrong");
    }
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
          <h5>{formatVND(data.quantity * data.item.price, "VND")}</h5>
          <QuantitySelector
            size="small"
            defaultValue={data.quantity}
            min={1}
            max={data.item.quantity}
            onDecrease={() => handleUpdateCart(-1)}
            onIncrease={() => handleUpdateCart(1)}
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
