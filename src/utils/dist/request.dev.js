"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enviroments = require("../configs/enviroments");

var _index = require("./index");

// others
var requireParam = function requireParam(msg) {
  throw Error(msg);
};

var request = function request(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? requireParam("Url is undefined") : _ref$url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? "POST" : _ref$method,
      payload = _ref.payload,
      params = _ref.params,
      cbSuccess = _ref.cbSuccess,
      _ref$cbError = _ref.cbError,
      cbError = _ref$cbError === void 0 ? _index.defaultHttpResponseCbError : _ref$cbError,
      LOADING_ACTION = _ref.LOADING_ACTION,
      SUCCESS_ACTION = _ref.SUCCESS_ACTION,
      ERROR_ACTION = _ref.ERROR_ACTION;
  return function (dispatch) {
    dispatch({
      type: LOADING_ACTION
    });
    return _enviroments.AXIOS_INSTANCE.request({
      url: url,
      method: method,
      data: payload,
      params: params
    }).then(function (res) {
      dispatch({
        type: SUCCESS_ACTION,
        payload: res
      });

      if (cbSuccess) {
        cbSuccess({
          payload: res
        });
      }
    })["catch"](function (error) {
      dispatch({
        type: ERROR_ACTION,
        payload: {
          error: error
        }
      });
      if (cbError) cbError(url, error);
    });
  };
};

var _default = request;
exports["default"] = _default;