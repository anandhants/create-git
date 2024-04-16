"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checking = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@mantine/core");
require("@mantine/core/styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Checking = () => {
  return /*#__PURE__*/_react.default.createElement(_core.MantineProvider, null, /*#__PURE__*/_react.default.createElement(_core.Title, {
    order: 1,
    c: "dimmed"
  }, "Checking namre"), /*#__PURE__*/_react.default.createElement(_core.Button, null, "Verdana button"));
};
exports.Checking = Checking;