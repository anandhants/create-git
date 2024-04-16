"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupedIcons = void 0;
var _core = require("@mantine/core");
var _Icons = require("./Icons");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GroupedIcons = props => {
  const {
    IconName,
    variant,
    classNames,
    color,
    onclick,
    indicationShow
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, IconName?.map(icon => /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    key: Math.random(),
    className: `cursor-pointer ${classNames}`,
    c: "text-icon-text "
  }, /*#__PURE__*/_react.default.createElement(_Icons.Icons, {
    IconName: icon.name,
    variant: variant,
    color: color,
    onClick: () => onclick(icon.name),
    indicationShow: indicationShow
  }))));
};
exports.GroupedIcons = GroupedIcons;