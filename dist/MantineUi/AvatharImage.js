"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatharImage = void 0;
var _core = require("@mantine/core");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AvatharImage = props => {
  const {
    AvathatarimageUrl,
    name,
    classNames,
    width,
    height,
    radius
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Image, {
    src: AvathatarimageUrl,
    alt: name,
    className: "".concat(classNames),
    w: width,
    h: height,
    radius: radius
  });
};
exports.AvatharImage = AvatharImage;