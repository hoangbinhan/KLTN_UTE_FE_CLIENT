"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCart = exports.addToCart = void 0;

var _user = require("../../constants/actions/user");

var _constants = _interopRequireDefault(require("../../constants"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// types
// others
var addToCart = function addToCart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      cbSuccess = _ref.cbSuccess,
      cbError = _ref.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.ADD_TO_CART,
    method: "POST",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.ADD_TO_CART_LOADING,
    SUCCESS_ACTION: _user.TYPES.ADD_TO_CART_SUCCESS,
    ERROR_ACTION: _user.TYPES.ADD_TO_CART_ERROR
  });
};

exports.addToCart = addToCart;

var getCart = function getCart() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$params = _ref2.params,
      params = _ref2$params === void 0 ? {} : _ref2$params,
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {} : _ref2$data,
      cbSuccess = _ref2.cbSuccess,
      cbError = _ref2.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.ADD_TO_CART,
    method: "GET",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.ADD_TO_CART_LOADING,
    SUCCESS_ACTION: _user.TYPES.ADD_TO_CART_SUCCESS,
    ERROR_ACTION: _user.TYPES.ADD_TO_CART_ERROR
  });
};

exports.getCart = getCart;