"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = void 0;

var _redux = require("redux");

var _fetchDataCategories = _interopRequireDefault(require("./fetchDataCategories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var home = (0, _redux.combineReducers)({
  fetchDataCategories: _fetchDataCategories["default"]
});
exports.home = home;