"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB5n0KPjnsPswon3SMbyFuVLUU5cCH2M5c",
  authDomain: "kltn-ute-fe-client.firebaseapp.com",
  projectId: "kltn-ute-fe-client",
  storageBucket: "kltn-ute-fe-client.appspot.com",
  messagingSenderId: "162663854679",
  appId: "1:162663854679:web:bbde8994b0f39d97112912",
  measurementId: "G-DBPRCB30FS"
};

var firebaseInitial = _firebase["default"].initializeApp(firebaseConfig);

var provider = new _firebase["default"].auth.GoogleAuthProvider();

var auth = _firebase["default"].auth();

exports.auth = auth;