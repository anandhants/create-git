"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMenu = void 0;
var _core = require("@mantine/core");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeaderMenu = props => {
  const {
    headerMenu,
    onClick,
    classNames
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Menu, {
    position: "bottom"
  }, headerMenu === null || headerMenu === void 0 ? void 0 : headerMenu.map((el, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: el.id,
    className: "".concat(classNames)
  }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    onClick: () => onClick(el.id, index)
  }, /*#__PURE__*/_react.default.createElement(_core.Text, {
    size: "md",
    fw: 500,
    className: "!text-secondary-text"
  }, el.name)))));
};
exports.HeaderMenu = HeaderMenu;