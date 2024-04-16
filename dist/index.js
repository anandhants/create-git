"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.Button;
  }
});
exports.CheckinNavbar = void 0;
Object.defineProperty(exports, "Checking", {
  enumerable: true,
  get: function () {
    return _Checking.default;
  }
});
Object.defineProperty(exports, "NavBar", {
  enumerable: true,
  get: function () {
    return _Navbar.default;
  }
});
var _Checking = _interopRequireDefault(require("./Checking"));
require("./tailwind.css");
require("@mantine/core/styles.css");
var _core = require("@mantine/core");
var _Navbar = _interopRequireDefault(require("./NavBar/Navbar"));
var _Button = require("./Button");
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckinNavbar = () => {
  return /*#__PURE__*/React.createElement(_core.MantineProvider, null, /*#__PURE__*/React.createElement(_core.Container, {
    fluid: true,
    className: "flex flex-col min-h-screen bg-white-bg !p-0 w-full"
  }, /*#__PURE__*/React.createElement(_Navbar.default, null)));
};
exports.CheckinNavbar = CheckinNavbar;