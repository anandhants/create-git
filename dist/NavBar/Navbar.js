"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@mantine/core");
var _HeaderMenu = require("../MantineUi/HeaderMenu");
var _DataUtilis = require("../Settings/DataUtilis");
var _avathar = _interopRequireDefault(require("../assets/Images/avathar.jpg"));
var _GroupedIcons = require("../MantineUi/GroupedIcons");
var _SubNavBar = require("./SubNavBar");
var _IconTextArrow = require("../MantineUi/IconTextArrow");
var _Logos = _interopRequireDefault(require("../assets/Images/Logos.svg"));
var _ToggleMenu = require("../MantineUi/ToggleMenu");
var _ContainerUi = require("../MantineUi/ContainerUi");
var _GroupMenus = require("../MantineUi/GroupMenus");
var _AvatharImage = require("../MantineUi/AvatharImage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NavBar = () => {
  const [openMenuId, setOpenMenuId] = (0, _react.useState)(null);
  const [openSubMenuId, setSubOpenMenuId] = (0, _react.useState)(null);
  const [openSubTitleMenu, setOpenSubTitleMenu] = (0, _react.useState)(null);
  const handleHeaderClick = id => {
    setOpenMenuId(prevId => prevId === id ? id : id);
    setSubOpenMenuId(null);
  };
  const closeMenu = () => {
    setOpenMenuId(null);
    setSubOpenMenuId(null);
  };
  const headerSubMenuFilter = _DataUtilis.headerSubMenu === null || _DataUtilis.headerSubMenu === void 0 ? void 0 : _DataUtilis.headerSubMenu.filter(el => el.id === openMenuId);
  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: "xl:px-24 px-4 py-4",
    shadow: "md",
    variant: "transparent"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    align: "center",
    justify: "space-between",
    className: "w-full"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, null, /*#__PURE__*/_react.default.createElement(_core.Menu, {
    shadow: "md",
    width: 200,
    trigger: "click-hover",
    openDelay: 100,
    closeDelay: 200
  }, /*#__PURE__*/_react.default.createElement(_core.Menu.Target, null, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_IconTextArrow.IconTextArrow, {
    dropdownTitle: "Daily Tasks",
    headerSelectData: _DataUtilis.headerSelectData,
    imageUrl: _Logos.default
  }))), /*#__PURE__*/_react.default.createElement(_core.Menu.Dropdown, null, /*#__PURE__*/_react.default.createElement(_HeaderMenu.HeaderMenu, {
    headerMenu: _DataUtilis.headerTitles
  })))), /*#__PURE__*/_react.default.createElement(_core.Group, {
    visibleFrom: "md",
    className: "ml-4"
  }, /*#__PURE__*/_react.default.createElement(_GroupedIcons.GroupedIcons, {
    IconName: _DataUtilis.headerIcons,
    variant: "white",
    indicationShow: true
  }), /*#__PURE__*/_react.default.createElement(_ToggleMenu.ToggleMenus, {
    ToogleMenusItem: _DataUtilis.toggleMenusData,
    position: "bottom-end"
  }, /*#__PURE__*/_react.default.createElement(_AvatharImage.AvatharImage, {
    AvathatarimageUrl: _avathar.default,
    name: "avathar",
    width: 40,
    height: 40,
    radius: "xl",
    classNames: "cursor-pointer "
  })))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    visibleFrom: "md",
    className: "xl:w-[67%] xl:!ml-[15.5rem] lg:w-[53%] lg:!ml-[15.5rem] md:w-6/12 mx-auto"
  }, /*#__PURE__*/_react.default.createElement(_ContainerUi.Containerui, {
    sizeContainer: "100%",
    containerClass: "mt-[-40px]"
  }, /*#__PURE__*/_react.default.createElement(_GroupMenus.GroupMenus, {
    headerMenusDatas: _DataUtilis.headerMenus,
    onClick: handleHeaderClick,
    state: openMenuId,
    textClassName: "!text-secondary-text !font-medium"
  }))), openMenuId !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full left-0 top-[4.5rem]"
  }, /*#__PURE__*/_react.default.createElement(_core.Divider, {
    visibleFrom: "md"
  }), " ", /*#__PURE__*/_react.default.createElement(_SubNavBar.SubNavBar, {
    Data: headerSubMenuFilter,
    handleCancel: closeMenu,
    setSubOpenMenuId: setSubOpenMenuId,
    openSubMenuId: openSubMenuId,
    openSubTitleMenu: openSubTitleMenu,
    setOpenSubTitleMenu: setOpenSubTitleMenu
  })));
};
var _default = exports.default = NavBar;