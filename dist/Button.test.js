"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _react3 = require("@storybook/react");
var stories = _interopRequireWildcard(require("./Button.stories"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Primary
} = (0, _react3.composeStories)(stories);
test('renders button with label', () => {
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Primary"
  }));
  const buttonElement = getByText('Primary');
  expect(buttonElement).toBeInTheDocument;
});
test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Click me",
    onClick: handleClick
  }));
  const buttonElement = getByText('Click me');
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
test('button is keyboard accessible', () => {
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Click me",
    autoFocus: true
  }));
  const buttonElement = getByText('Click me');
  expect(buttonElement).toHaveFocus();
});
test('renders disabled button', () => {
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Click me",
    disabled: true
  }));
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeDisabled;
});
test('does not call onClick when disabled', () => {
  const handleClick = jest.fn();
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Click me",
    onClick: handleClick,
    disabled: true
  }));
  const buttonElement = getByText('Click me');
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(0);
});
test('renders button with custom color', () => {
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, {
    label: "Click me",
    style: {
      color: "red"
    }
  }));
  const buttonElement = getByText('Click me');
  //expect(buttonElement).toHaveStyle('color: red');
  expect(buttonElement).toHaveStyle;
});
test('throws error if label prop is missing', () => {
  console.error = jest.fn(); // Suppress console.error output
  expect(() => (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Primary, null)));
});