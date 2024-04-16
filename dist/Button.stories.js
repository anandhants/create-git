"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
var _solid = require("@heroicons/react/solid");
require("./tailwind.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import results from '../../.jest-test-results.json';

const meta = {
  title: 'Components/Button',
  component: _Button.Button,
  //decorators: [withTests({ results:results })],
  parameters: {
    layout: 'centered',
    jest: ['Button.test.tsx']
  },
  tags: ['autodocs']
};
var _default = exports.default = meta;
const Primary = exports.Primary = {
  args: {
    label: /*#__PURE__*/_react.default.createElement(_solid.XIcon, {
      className: "w-6 h-6 stroke-2"
    }),
    backgroundColor: "bg-gradient-to-t",
    className: "text-bluegray600 flex items-center justify-center h-11 w-11 text-sm font-bold rounded bg-gradient-to-t from-brgrdbtn1 to-brgrdbtn2 border border-brdrbtn1 shadow"
  }
};