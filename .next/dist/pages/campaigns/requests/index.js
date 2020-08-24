'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Found', this.props.requestCount, ' request'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;

                                console.log(requests);
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

;

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWducyIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVc7O0FBQ2xCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7cUNBeUJTO3lCQUNSOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFTLEFBQzdDO3VDQUNJLEFBQUM7eUJBQUQsQUFDSyxBQUNMO3dCQUZBLEFBRUksQUFDSjs2QkFIQSxBQUdTLEFBQ1Q7NkJBQVMsT0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDcEI7b0NBQWdCLE9BQUEsQUFBSyxNQUxyQixBQUsyQjs7a0NBTDNCO29DQURKLEFBQ0ksQUFRUDtBQVJPO0FBQ0EsaUJBREE7QUFGUixBQUFPLEFBV1YsYUFYVTs7OztpQ0FhRjtnQkFBQSxBQUNHLFNBREgsQUFDaUMsdUJBRGpDLEFBQ0c7Z0JBREgsQUFDVSxNQURWLEFBQ2lDLHVCQURqQyxBQUNVO2dCQURWLEFBQ2MsYUFEZCxBQUNpQyx1QkFEakMsQUFDYztnQkFEZCxBQUN5QixPQUR6QixBQUNpQyx1QkFEakMsQUFDeUIsQUFDN0I7O21DQUdJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0U7QUFERjsrQkFDRSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBYzs4QkFBckQ7Z0NBQUE7QUFBQTtlQUhOLEFBQ0ksQUFDRSxBQUNBLEFBSUYsa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFJUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFwQlIsQUFPSSxBQWFJLEFBQ0ssQUFBSyxBQUtkLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNVLGNBQUEsQUFBSyxNQURmLEFBQ3FCLGNBOUI3QixBQUdJLEFBMEJJLEFBS1g7Ozs7O2lILEFBeEU0Qjs7Ozs7aUNBRWpCO0EsMENBQVcsTSxBQUFNLE1BQ25CLEEsQUFERTtBLDJDQUNTLHdCLEFBQUEsQUFBVTs7dUNBQ0EsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7O2lDQUF6RDtBOzt1Q0FDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF6RDtBOzt5REFFa0IsQUFBUSxVQUMxQixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0MsT0FERCxBQUVDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFXLEFBQ3JCOzJDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFBUTtBLEFBSjVCLEFBQ3hCLGlDQUFBLENBRHdCOztpQ0FBbEI7QSxvREFPTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7aUVBQ0wsRUFBQyxTQUFELFNBQVMsVUFBVCxVQUFrQixjQUFsQixjQUErQixnQixBQUEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBbEJZOztBQTRFMUIsQUFHRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJHOi9raWNrc3RhcnQifQ==