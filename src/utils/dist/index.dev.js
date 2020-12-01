"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomColor = exports.beforeUpload = exports.formatVND = exports.getBase64Image = exports.getBase64 = exports.defaultHttpResponseCbError = void 0;

var _antd = require("antd");

// libs import

/**
 * default http response callback error
 */
var defaultHttpResponseCbError = function defaultHttpResponseCbError(url, err) {
  _antd.message.error("".concat(err)); // eslint-disable-next-line no-console


  console.log("URL：", url); // eslint-disable-next-line no-console

  console.log("Detail：", err);
};

exports.defaultHttpResponseCbError = defaultHttpResponseCbError;

var getBase64 = function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

exports.getBase64 = getBase64;

var getBase64Image = function getBase64Image(img, callback) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};

exports.getBase64Image = getBase64Image;

var formatVND = function formatVND(value, currency) {
  return "".concat(parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"), " ").concat(currency);
};

exports.formatVND = formatVND;

var beforeUpload = function beforeUpload(file) {
  var isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";

  if (!isJpgOrPng) {
    _antd.message.error("You can only upload JPG/PNG file!");
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    _antd.message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

exports.beforeUpload = beforeUpload;

var randomColor = function randomColor() {
  var listColor = ["#ffa39e", "#ff7875", "#ffbb96", "#ff9c6e", "#ffc069", "#a0d911", "#faad14", "#52c41a", "#389e0d", "#13c2c2", "#08979c", "#1890ff", "#096dd9", "#597ef7", "#10239e", "#722ed1", "#f759ab"];
  return listColor[Math.floor(Math.random() * listColor.length)];
};

exports.randomColor = randomColor;