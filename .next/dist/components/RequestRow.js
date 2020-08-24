'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var readyToFinalize = this.props.request.approvalCount > this.props.request.approversCount / 2;

            return _react2.default.createElement(Row, { disabled: this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, this.props.id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, this.props.request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, this.props.request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, this.props.request.approvalCount, '/', this.props.approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZWFkeVRvRmluYWxpemUiLCJyZXF1ZXN0IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFRixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFFRjtBQUZFLHVDQUVTLHdCQUFTLE1BQUEsQUFBSyxNQUZ2QixBQUVTLEFBQW9COzRDQUY3QjttQ0FJZSxjQUFBLEFBQUssSUFKcEIsQUFJZSxBQUFTOzs2QkFBMUI7QUFKRSxnREFBQTs0Q0FBQTs0Q0FLRixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBTkYsQUFLRixBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFMRTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBV1osc0ZBQWEsb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBRUg7QUFGRyx1Q0FFUSx3QkFBUyxNQUFBLEFBQUssTUFGdEIsQUFFUSxBQUFvQjs2Q0FGNUI7bUNBSWMsY0FBQSxBQUFLLElBSm5CLEFBSWMsQUFBUzs7NkJBQTFCO0FBSkcsaURBQUE7NkNBQUE7NENBS0gsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0NBQzVDLFNBTkQsQUFLSCxBQUFxRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELDZCQURFOzs2QkFMRzs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FhTDtnQkFBQSxBQUNHLE1BREgsQUFDZSx1QkFEZixBQUNHO2dCQURILEFBQ08sT0FEUCxBQUNlLHVCQURmLEFBQ08sQUFHWDs7Z0JBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsaUJBQTdFLEFBQThGLEFBSTlGOzttQ0FDQyxjQUFELE9BQUssVUFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTFCLEFBQWtDLFVBQVUsVUFBVSxtQkFBa0IsQ0FBRSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQXJGLEFBQTZGOzhCQUE3RjtnQ0FBQSxBQUNHO0FBREg7YUFBQSxrQkFDSSxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLE1BRGYsQUFDRyxBQUFrQixBQUNsQixxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLE1BQUwsQUFBVyxRQUZyQixBQUVHLEFBQTBCLEFBQzFCLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLDZCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxPQUhoRCxBQUdHLEFBQU8sQUFBNEMsQUFDbkQsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsb0JBQU8sQUFBSyxNQUFMLEFBQVcsUUFKckIsQUFJRyxBQUEwQixBQUMxQiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFsQixBQUEwQixlQUFnQixVQUFBLEFBQUssTUFMbEQsQUFLRyxBQUFxRCxBQUNyRCxpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUMvQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7YUFBQSxFQVJQLEFBTUcsQUFFSSxBQUdKLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsV0FBbkIsQUFBOEIsdUJBQy9CLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTthQUFBLEVBZFAsQUFDQSxBQVdHLEFBRUksQUFLVjs7Ozs7QUFHTCxBLEFBeER5Qjs7a0JBd0R6QixBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiRzova2lja3N0YXJ0In0=