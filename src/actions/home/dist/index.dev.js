"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDataCategories = void 0;

var _categories = require("../../constants/actions/categories");

var _constants = _interopRequireDefault(require("../../constants"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// types
// others
var fetchDataCategories = function fetchDataCategories() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      cbSuccess = _ref.cbSuccess;

  return (0, _request["default"])({
    url: _constants["default"].ENDPOINTS.CATEGORIES,
    method: "GET",
    cbSuccess: cbSuccess,
    payload: data,
    LOADING_ACTION: _categories.TYPES.FETCH_DATA_CATEGORIES_LOADING,
    SUCCESS_ACTION: _categories.TYPES.FETCH_DATA_CATEGORIES_SUCCESS,
    ERROR_ACTION: _categories.TYPES.FETCH_DATA_CATEGORIES_ERROR
  });
};

exports.fetchDataCategories = fetchDataCategories;