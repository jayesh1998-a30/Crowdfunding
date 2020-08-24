webpackHotUpdate(7,{

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1137);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(507);

var _routes = __webpack_require__(748);

var _campaign = __webpack_require__(1421);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1428);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "G:\\kickstart\\pages\\campaigns\\requests\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "G:\\kickstart\\pages\\campaigns\\requests\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4zZjQ2NmZkN2FhMmFmOWI1Mzk1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2ExYWUzN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7QnV0dG9uLFRhYmxlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydHtMaW5rfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgQ2FtcGFpZ25zIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcblxyXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG5cclxuICAgICAgICBjb25zdCAge2FkZHJlc3N9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbnMoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgLm1hcCgoZWxlbWVudCxpbmRleCkgPT4gIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKSB9KSAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcclxuICAgICAgICByZXR1cm4ge2FkZHJlc3MscmVxdWVzdHMscmVxdWVzdENvdW50LGFwcHJvdmVyc0NvdW50fTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICByZW5kZXJSb3dzKCl7XHJcbiAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsaW5kZXgpID0+e1xyXG4gICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgPFJlcXVlc3RSb3dcclxuICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgIHJlbmRlcigpeyAgXHJcbiAgICAgICAgY29uc3Qge0hlYWRlcixSb3csSGVhZGVyQ2VsbCxCb2R5fSA9IFRhYmxlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD0ncmlnaHQnIHN0eWxlPXt7bWFyZ2luQm90dG9tOjEwfX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5ke3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFMQTtBQVFBO0FBUkE7QUFDQTtBQVFBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBakVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFJQTtBQUhBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9