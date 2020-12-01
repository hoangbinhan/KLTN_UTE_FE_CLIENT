"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.initializeStore = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxPersist = require("redux-persist");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

var _combineReducers = _interopRequireDefault(require("./combineReducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: "root",
  storage: _storage["default"],
  stateReconciler: _autoMergeLevel["default"],
  blacklist: ["globalReducer", "shopReducer"]
};
var pReducer = (0, _reduxPersist.persistReducer)(persistConfig, _combineReducers["default"]);
var createdStore = (0, _redux.createStore)(pReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));

var initializeStore = function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createdStore;
};

exports.initializeStore = initializeStore;
var persistor = (0, _reduxPersist.persistStore)(createdStore);
exports.persistor = persistor;