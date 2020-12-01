"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AXIOS_INSTANCE = exports.baseUrl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO: Add environments
var baseUrl = "http://localhost:3001";
exports.baseUrl = baseUrl;

var AXIOS_INSTANCE = _axios["default"].create({
  baseURL: baseUrl
});

exports.AXIOS_INSTANCE = AXIOS_INSTANCE;