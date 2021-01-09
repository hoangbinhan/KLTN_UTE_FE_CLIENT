// libs import
import { message } from "antd";
import axios from "axios";
/**
 * default http response callback error
 */
export const defaultHttpResponseCbError = (url, err) => {
  message.error(`${err}`);
  // eslint-disable-next-line no-console
  console.log("URL：", url);
  // eslint-disable-next-line no-console
  console.log("Detail：", err);
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const getBase64Image = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const formatVND = (value, currency) => {
  // return new Intl.NumberFormat("vi-VN", {
  //   style: "currency",
  //   currency: "VND",
  // }).format(value);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
  // return `${parseFloat(value)
  //   .toFixed(2)
  //   .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} ${currency}`;
};

export const beforeUpload = (file) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const randomColor = () => {
  const listColor = [
    "#ffa39e",
    "#ff7875",
    "#ffbb96",
    "#ff9c6e",
    "#ffc069",
    "#a0d911",
    "#faad14",
    "#52c41a",
    "#389e0d",
    "#13c2c2",
    "#08979c",
    "#1890ff",
    "#096dd9",
    "#597ef7",
    "#10239e",
    "#722ed1",
    "#f759ab",
  ];
  return listColor[Math.floor(Math.random() * listColor.length)];
};

export const stringToHTML = (str) => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

export const getLocationShippingAddress = (address) => {
  const shopLatitude = 10.849973;
  const shopLongitude = 106.771626;
  axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=b877bd11fcba5988a39638be29741df5&query=${address}`
    )
    .then(async (res) => {
      const current = await res?.data?.data[0];
      const { latitude, longitude } = current;
      const R = 6371e3; // metres
      const latShop = (shopLatitude * Math.PI) / 180;
      const latAddress = (latitude * Math.PI) / 180;
      const squareRootOmega = ((latitude - shopLatitude) * Math.PI) / 180;
      const squareRootLamda = ((longitude - shopLongitude) * Math.PI) / 180;
      const a =
        Math.sin(squareRootOmega / 2) * Math.sin(squareRootOmega / 2) +
        Math.cos(latShop) *
          Math.cos(latAddress) *
          Math.sin(squareRootLamda / 2) *
          Math.sin(squareRootLamda / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // in metres
      const distance = Math.ceil(d) / 1000;
      const cost = await getShippingFee(distance);
      return cost;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShippingFee = (distance) => {
  switch (distance) {
    case distance < 50:
      return "FREE";
    case distance < 100:
      return 10;
    case distance > 400:
      return 20;
    case distance < 600:
      return 40;
    case distance < 800:
      return 60;
    case distance < 1000:
      return 80;
    case distance < 1200:
      return 100;
    default:
      return 100;
  }
};
