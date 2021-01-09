import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Collapse,
  message,
} from "antd";
import { useState, useCallback, useContext, useEffect } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import Product from "../../components/product/Product";
const tree = require("../../addressVN/tree.json");
import { formatVND } from "../../utils";
import { UserContext } from "../../context/UserContext";
import { checkOut, cartCheckoutComplete } from "../../actions/user";
import { getInformation } from "../../actions/information";
import { getLocationShippingAddress } from "../../utils";
import {fetchShippingFee} from '../../actions/checkout'

const { Option } = Select;

const paymentData = [
  {
    name: "COD Payment",
    content: "Checkout with COD payment.",
  },
  {
    name: "Momo Payment",
    content: "Checkout with Momo payment.",
  },
];

export default function checkout() {
  const { Panel } = Collapse;
  const router = useRouter();
  const { cart } = useSelector((state) => state.user.getCart);
  const { information } = useSelector(
    (state) => state.information.getInformation
  );
  const {cost} = useSelector(
    (state)=>state.checkout.fetchShippingFee
  )
  const [paymentMethod, setPaymentMethod] = useState("COD Payment");
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [addressShipping, setAddressShipping] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [form] = Form.useForm();
  const infoToken = useContext(UserContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInformation());
  }, [dispatch]);
  useEffect(() => {
    if (JSON.stringify(information) !== "{}") {
      const values = {
        ...information?.data,
      };
      const arrName = values.name.split(" ");
      values.lastName = arrName.pop();
      values.firstName = arrName.join(" ");
      values.phone = values.phoneNumber;
      form.setFieldsValue(values);
    }
  }, [information]);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const onFinish = (values) => {
    if (infoToken?.email && cart) {
      let productsInvoice = [];
      const customerDetail = {
        phoneNumber: values.phone,
        firstName: values.firstName,
        lastName: values.lastName,
        email: infoToken.email,
        address: values.address,
      };
      for (let i = 0; i < cart?.cart.length; i++) {
        let result = {
          ...cart?.cart[i].item,
          quantity: cart?.cart[i].quantity,
        };
        productsInvoice.push(result);
      }

      const paymentDetail = {
        paymentMethod: paymentMethod,
        provinceCity: values.province,
        district: values.district,
        ward: values.ward,
        address: values.address,
      };
      const totalDetail = {
        note: values.note,
        unitOrder: cart.totalItem,
        subTotal: cart.totalPrice,
        shippingFee: parseFloat(cost) ? parseFloat(cost) : cost,
        total: parseFloat(cost) ?  cart.totalPrice + parseFloat(cost) : cart.totalPrice
      };
      setisLoading(true);
      dispatch(
        checkOut({
          data: {
            customerDetail,
            productsInvoice,
            paymentDetail,
            totalDetail,
          },
          cbSuccess: (res) => {
            setisLoading(false);
            if (res.payload?.data?.urlQrcode) {
              document.location.href = res.payload?.data?.urlQrcode;
            } else {
              dispatch(cartCheckoutComplete({ ...cart, paymentMethod }));
              router.push("/shop/checkout-complete");
            }
          },
          cbError: () => {
            setisLoading(false);
            message.error("Some thing went wrong");
          },
        })
      );
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChoosePayment = useCallback(
    (key) => {
      setPaymentMethod(key);
    },
    [paymentMethod]
  );

  const handleProvinceOnChange = async (value, key) => {
    await setDistrict([]);
    await setWard([]);
    await form.setFieldsValue({ district: undefined, ward: undefined });
    await setDistrict(tree[key.key][`quan-huyen`]);
    setAddressShipping(value);
  };

  const handleDistrictOnChange = async (value, key) => {
    await setWard([]);
    await form.setFieldsValue({ ward: undefined });
    await setWard(district[key.key][`xa-phuong`]);
    setAddressShipping(`${addressShipping}, ${value}`);
  };

  const handleWardOnChange = async (value, key) => {
    const location = `${addressShipping}`;
    dispatch(fetchShippingFee(location))
    // const shippingCost = await getLocationShippingAddress(location);
    // console.log("shippingCost", shippingCost);
  };

  return (
    <LayoutOne title="Checkout">
      <div className="checkout">
        <div className="checkout-top">
          <Container>
            <Row gutter={{ xs: 0, lg: 70 }}>
              <Col span={24} lg={15} xl={17}>
                <h3 className="checkout-title">Billing details</h3>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  id="checkout-form"
                  layout="vertical"
                  className="checkout-form"
                  form={form}
                >
                  <Row gutter={{ xs: 10, sm: 15, md: 30, lg: 70 }}>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="First name"
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your first name!",
                          },
                        ]}
                      >
                        <Input placeholder="Please input your first name!" />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Last name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your last name!",
                          },
                        ]}
                      >
                        <Input placeholder="Please input your last name!" />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number !",
                          },
                        ]}
                      >
                        <Input placeholder="Please input your phone number!" />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Province"
                        name="province"
                        rules={[
                          {
                            required: true,
                            message: "Please select your phone province !",
                          },
                        ]}
                      >
                        <Select
                          onChange={handleProvinceOnChange}
                          placeholder="select province/city..."
                        >
                          {Object.values(tree).map((item) => (
                            <Option key={item.code} value={item.name}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="District"
                        name="district"
                        rules={[
                          {
                            required: true,
                            message: "Please select your phone district !",
                          },
                        ]}
                      >
                        <Select
                          onChange={handleDistrictOnChange}
                          placeholder="select district..."
                        >
                          {Object.values(district).map((item) => (
                            <Option key={item.code} value={item.name}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Ward"
                        name="ward"
                        rules={[
                          {
                            required: true,
                            message: "Please select your phone ward !",
                          },
                        ]}
                      >
                        <Select
                          onChange={handleWardOnChange}
                          placeholder="select ward..."
                        >
                          {Object.values(ward).map((item) => (
                            <Option key={item.code} value={item.name}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                      <Form.Item label="note" name="Note">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col span={24} md={16} lg={9} xl={7}>
                <div className="checkout-total">
                  <h3 className="checkout-title">Your Order</h3>
                  <div className="checkout-total__table">
                    <div className="divider" />
                    <table className="checkout-total__table-calculate">
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Subtoal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart?.cart?.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.item.productName}
                              <span> x {item.quantity}</span>
                            </td>
                            <td>
                              {formatVND(
                                item.item.price * item.quantity,
                                "VND"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-subtotal">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>{formatVND(cart?.totalPrice, "VND")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-shiping">
                      <tbody>
                        {cost && <tr>
                          <td>
                            <h5>Shiping</h5>
                          </td>
                          <td>{parseFloat(cost) ? formatVND(cost,'VND') : cost}</td>
                        </tr>}
                      </tbody>
                    </table>
                    <table className="checkout-total__table-total">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td>{parseFloat(cost) ? formatVND(cart?.totalPrice + parseFloat(cost), "VND") : formatVND(cart?.totalPrice, "VND")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Collapse
                      className="checkout-payment"
                      accordion
                      defaultActiveKey={paymentMethod}
                      ghost
                      onChange={onChoosePayment}
                    >
                      {paymentData.map((item) => (
                        <Panel
                          showArrow={false}
                          header={item.name}
                          key={item.name}
                          onClick={() => setPaymentMethod(item.name)}
                          extra={
                            <i
                              className={
                                paymentMethod === item.name
                                  ? "fas fa-check-square"
                                  : "fal fa-square"
                              }
                            />
                          }
                        >
                          <p>{item.content}</p>
                        </Panel>
                      ))}
                    </Collapse>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="checkout-bottom">
          <Container>
            <h5>Discount When Purchased Together</h5>
            <div className="checkout-related-products">
              <Slider {...settings}>
                {/* {productData.slice(0, 8).map((item, index) => (
                  <div className="slider-item" key={index}>
                    <Product data={item} />
                  </div>
                ))} */}
              </Slider>
            </div>
          </Container>
        </div>
        <div className="checkout-sticky">
          <Container>
            <div className="checkout-functions">
              <Button className="checkout-functions--shopping">
                <Link href={process.env.PUBLIC_URL + "/"}>
                  <a>Continue Shopping</a>
                </Link>
              </Button>
              <div className="checkout-price-finally">
                <table>
                  <tbody>
                    <tr>
                      <td>{cart?.totalItem} items</td>
                      <td>{formatVND(cart?.totalPrice, "VND")}</td>
                    </tr>
                    <tr>
                      <td>Total:</td>
                      <td>{formatVND(cart?.totalPrice, "VND")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button
                className="checkout-functions--next"
                form="checkout-form"
                key="submit"
                htmlType="submit"
                style={{ marginBottom: 0 }}
                loading={isLoading}
              >
                Next Step
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
}
