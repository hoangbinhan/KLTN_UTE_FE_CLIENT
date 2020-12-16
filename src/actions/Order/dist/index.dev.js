"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = void 0;

var _order = require("../../constants/actions/order");

var _constants = _interopRequireDefault(require("../../constants"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// types
// others
var getOrders = function getOrders() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      cbSuccess = _ref.cbSuccess,
      cbError = _ref.cbError;

  return (0, _request["default"])({
    url: "".concat(_constants["default"].ENDPOINTS.GET_ORDERS),
    method: "GET",
    cbSuccess: cbSuccess,
    cbError: cbError,
    params: params,
    payload: data,
    LOADING_ACTION: _order.TYPES.GET_DETAIL_ORDER_LOADING,
    SUCCESS_ACTION: _order.TYPES.GET_DETAIL_ORDER_SUCCESS,
    ERROR_ACTION: _order.TYPES.GET_DETAIL_ORDER_ERROR
  });
};

exports.getOrders = getOrders;