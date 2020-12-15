"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearOldDataCheckoutComplete = exports.clearOldDate = exports.cartCheckoutComplete = exports.checkOut = exports.deleteCart = exports.updateCart = exports.getCart = exports.addToCart = exports.updatePassword = exports.forgotPassword = exports.register = exports.login = void 0;

var _user = require("../../constants/actions/user");

var _constants = _interopRequireDefault(require("../../constants"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// types
// others
var login = function login() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      cbSuccess = _ref.cbSuccess,
      cbError = _ref.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.LOGIN,
    method: "POST",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.LOGIN_LOADING,
    SUCCESS_ACTION: _user.TYPES.LOGIN_SUCCESS,
    ERROR_ACTION: _user.TYPES.LOGIN_ERROR
  });
};

exports.login = login;

var register = function register() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$params = _ref2.params,
      params = _ref2$params === void 0 ? {} : _ref2$params,
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {} : _ref2$data,
      cbSuccess = _ref2.cbSuccess,
      cbError = _ref2.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.REGISTER,
    method: "POST",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.REGISTER_LOADING,
    SUCCESS_ACTION: _user.TYPES.REGISTER_SUCCESS,
    ERROR_ACTION: _user.TYPES.REGISTER_ERROR
  });
};

exports.register = register;

var forgotPassword = function forgotPassword() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$params = _ref3.params,
      params = _ref3$params === void 0 ? {} : _ref3$params,
      _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {} : _ref3$data,
      cbSuccess = _ref3.cbSuccess,
      cbError = _ref3.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.FORGOT_PASSWORD,
    method: "POST",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.FORGOT_PASSWORD_LOADING,
    SUCCESS_ACTION: _user.TYPES.FORGOT_PASSWORD_SUCCESS,
    ERROR_ACTION: _user.TYPES.FORGOT_PASSWORD_ERROR
  });
};

exports.forgotPassword = forgotPassword;

var updatePassword = function updatePassword() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$params = _ref4.params,
      params = _ref4$params === void 0 ? {} : _ref4$params,
      _ref4$data = _ref4.data,
      data = _ref4$data === void 0 ? {} : _ref4$data,
      cbSuccess = _ref4.cbSuccess,
      cbError = _ref4.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.UPDATE_PASSWORD,
    method: "PUT",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.UPDATE_PASSWORD_LOADING,
    SUCCESS_ACTION: _user.TYPES.UPDATE_PASSWORD_SUCCESS,
    ERROR_ACTION: _user.TYPES.UPDATE_PASSWORD_ERROR
  });
};

exports.updatePassword = updatePassword;

var addToCart = function addToCart() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$params = _ref5.params,
      params = _ref5$params === void 0 ? {} : _ref5$params,
      _ref5$data = _ref5.data,
      data = _ref5$data === void 0 ? {} : _ref5$data,
      cbSuccess = _ref5.cbSuccess,
      cbError = _ref5.cbError;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.CART,
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
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$params = _ref6.params,
      params = _ref6$params === void 0 ? {} : _ref6$params,
      _ref6$data = _ref6.data,
      data = _ref6$data === void 0 ? {} : _ref6$data,
      cbSuccess = _ref6.cbSuccess,
      cbError = _ref6.cbError;

  return (0, _request["default"])({
    url: "".concat(_constants["default"].ENDPOINTS.CART),
    method: "GET",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.GET_CART_LOADING,
    SUCCESS_ACTION: _user.TYPES.GET_CART_SUCCESS,
    ERROR_ACTION: _user.TYPES.GET_CART_ERROR
  });
};

exports.getCart = getCart;

var updateCart = function updateCart() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$params = _ref7.params,
      params = _ref7$params === void 0 ? {} : _ref7$params,
      _ref7$data = _ref7.data,
      data = _ref7$data === void 0 ? {} : _ref7$data,
      cbSuccess = _ref7.cbSuccess,
      cbError = _ref7.cbError;

  return (0, _request["default"])({
    url: "".concat(_constants["default"].ENDPOINTS.CART),
    method: "PUT",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.UPDATE_CART_LOADING,
    SUCCESS_ACTION: _user.TYPES.UPDATE_CART_SUCCESS,
    ERROR_ACTION: _user.TYPES.UPDATE_CART_ERROR
  });
};

exports.updateCart = updateCart;

var deleteCart = function deleteCart() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$params = _ref8.params,
      params = _ref8$params === void 0 ? {} : _ref8$params,
      _ref8$data = _ref8.data,
      data = _ref8$data === void 0 ? {} : _ref8$data,
      cbSuccess = _ref8.cbSuccess,
      cbError = _ref8.cbError;

  return (0, _request["default"])({
    url: "".concat(_constants["default"].ENDPOINTS.CART),
    method: "DELETE",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.DELETE_CART_LOADING,
    SUCCESS_ACTION: _user.TYPES.DELETE_CART_SUCCESS,
    ERROR_ACTION: _user.TYPES.DELETE_CART_ERROR
  });
};

exports.deleteCart = deleteCart;

var checkOut = function checkOut() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$params = _ref9.params,
      params = _ref9$params === void 0 ? {} : _ref9$params,
      _ref9$data = _ref9.data,
      data = _ref9$data === void 0 ? {} : _ref9$data,
      cbSuccess = _ref9.cbSuccess,
      cbError = _ref9.cbError;

  return (0, _request["default"])({
    url: "".concat(_constants["default"].ENDPOINTS.CHECKOUT),
    method: "POST",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _user.TYPES.CHECKOUT_LOADING,
    SUCCESS_ACTION: _user.TYPES.CHECKOUT_SUCCESS,
    ERROR_ACTION: _user.TYPES.CHECKOUT_ERROR
  });
};

exports.checkOut = checkOut;

var cartCheckoutComplete = function cartCheckoutComplete(data) {
  return function (dispatch) {
    dispatch({
      type: _user.TYPES.CART_CHECKOUT_COMPLETE,
      payload: data
    });
  };
};

exports.cartCheckoutComplete = cartCheckoutComplete;

var clearOldDate = function clearOldDate() {
  return function (dispatch) {
    return dispatch({
      type: _user.TYPES.CLEAR_OLD_DATA
    });
  };
};

exports.clearOldDate = clearOldDate;

var clearOldDataCheckoutComplete = function clearOldDataCheckoutComplete() {
  return function (dispatch) {
    return dispatch({
      type: _user.TYPES.CLEAR_OLD_DATA_CHECKOUT_COMPLETE
    });
  };
};

exports.clearOldDataCheckoutComplete = clearOldDataCheckoutComplete;