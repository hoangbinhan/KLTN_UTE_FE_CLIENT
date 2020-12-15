"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _redux = require("redux");

var _getCart = _interopRequireDefault(require("./getCart"));

var _updateCart = _interopRequireDefault(require("./updateCart"));

var _deleteCart = _interopRequireDefault(require("./deleteCart"));

var _addToCart = _interopRequireDefault(require("./addToCart"));

var _cartCheckoutComplete = _interopRequireDefault(require("./cartCheckoutComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = (0, _redux.combineReducers)({
  getCart: _getCart["default"],
  updateCart: _updateCart["default"],
  deleteCart: _deleteCart["default"],
  addToCart: _addToCart["default"],
  cartCheckoutComplete: _cartCheckoutComplete["default"]
});
exports.user = user;