"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavBar = void 0;
var _core = require("@mantine/core");
var _ToggleMenu = require("../MantineUi/ToggleMenu");
var _SubIconText = require("../MantineUi/SubIconText");
var _IconText = require("../MantineUi/IconText");
var _ContainerUi = require("../MantineUi/ContainerUi");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SubNavBar = props => {
  const {
    Data,
    handleCancel,
    setSubOpenMenuId,
    openSubMenuId,
    openSubTitleMenu,
    setOpenSubTitleMenu
  } = props;
  const handleHeaderSubClick = id => {
    setSubOpenMenuId(prevId => prevId === id ? null : id);
  };
  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    shadow: "md",
    className: "bg-white-bg xl:px-24 px-4 py-4 py-3",
    visibleFrom: "md"
  }, /*#__PURE__*/_react.default.createElement(_ContainerUi.Containerui, {
    sizeContainer: "100%",
    containerClass: "!pl-0"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    className: "flex items-center ",
    h: 40
  }, /*#__PURE__*/_react.default.createElement(_ToggleMenu.ToggleMenus, {
    ToogleMenusItem: Data,
    opened: openSubTitleMenu,
    setOpened: Data?.[0].options == true ? setOpenSubTitleMenu : () => {}
  }, Data[0].options == true ? /*#__PURE__*/_react.default.createElement(_SubIconText.SubIconText, {
    dropdownTitle: Data[0].name,
    subIcon: Data[0].icons,
    fontWeight: 500,
    colors: "text-subMenuText"
  }) : /*#__PURE__*/_react.default.createElement(_IconText.IconText, {
    dropdownTitle: Data[0].name,
    subIcon: Data[0].icons
  })), Data[0].items?.map(el => /*#__PURE__*/_react.default.createElement(_core.Text, {
    size: "md",
    inline: true,
    key: Math.random(),
    p: 12,
    className: `cursor-pointer text-secondary-text !mx-1 hover:bg-[#F1F3F5] rounded-md ${openSubMenuId == el.id && "bg-[#F1F3F5]"}`,
    fw: 500,
    onClick: () => handleHeaderSubClick(el.id)
  }, el.name)))), /*#__PURE__*/_react.default.createElement(_core.ActionIcon, {
    variant: "transparent",
    "aria-label": "Settings",
    className: "!absolute xl:!right-[7rem] !right-[2rem] top-[1.50rem]"
  }, /*#__PURE__*/_react.default.createElement(_core.CloseButton, {
    onClick: handleCancel,
    variant: "transparent",
    className: "!w-10 !h-10"
  })));
};
exports.SubNavBar = SubNavBar;