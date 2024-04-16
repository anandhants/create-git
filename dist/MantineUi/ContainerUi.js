"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Containerui = void 0;
var _core = require("@mantine/core");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Containerui = props => {
  const {
    children,
    sizeContainer,
    containerClass,
    height
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Container, {
    size: sizeContainer,
    className: containerClass,
    p: 0,
    h: height
  }, children);
};
exports.Containerui = Containerui;