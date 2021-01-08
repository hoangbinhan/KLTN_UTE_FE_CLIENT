import React, { useContext, useState } from "react";
import { Button, Modal, message, Form, Input } from "antd";
import { useRouter } from "next/router";
import LayoutOne from "../../components/layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailOrder } from "../../actions/information";
import { UserContext } from "../../context/UserContext";
import Container from "../../components/other/Container";
import { formatVND } from "../../utils";
import { cancelInvoice } from "../../actions/user";

const { TextArea } = Input;

const CollectionCreateForm = ({ isModalVisible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={isModalVisible}
      title="Please tell us your reason!"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="reason"
          label="Reason"
          rules={[
            {
              required: true,
              message: "Please input the Reason",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const detailOrder = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingCancel, setloadingCancel] = useState(false);
  const infoToken = useContext(UserContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { detail } = useSelector((state) => state.information.getDetailOrder);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onConfirmCancel = (values) => {
    if (slug) {
      setloadingCancel(true);
      dispatch(
        cancelInvoice({
          data: { ...values, id: slug },
          cbSuccess: () => {
            setloadingCancel(false);
            message.success("Cancel Success");
            setIsModalVisible(false);
          },
          cbError: () => {
            setloadingCancel(false);
            message.error("Some thing went wrong!");
            setIsModalVisible(false);
          },
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getDetailOrder({ params: { id: slug } }));
  }, [dispatch, slug, loadingCancel]);

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
        {detail?.data?.status == "PENDING" && (
          <>
            <CollectionCreateForm
              isModalVisible={isModalVisible}
              onCreate={onConfirmCancel}
              onCancel={() => {
                handleCancel;
              }}
            />
            <Button loading={loadingCancel} onClick={showModal}>
              Cancel Order
            </Button>
          </>
        )}
      </Container>
    </LayoutOne>
  );
};

export default detailOrder;
