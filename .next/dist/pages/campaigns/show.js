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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                balance = _props.balance,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount,
                manager = _props.manager;

            var items = [{
                header: manager,
                meta: 'Address of manager',
                description: 'The manager create this campaign and can create request to withdraw money',
                style: { overflowWrap: 'break-word' }

            }, {
                header: minimumContribution,
                meta: 'MinimumContribution',
                description: 'you must contribute atlest this much wei to become an approver'
            }, {
                header: requestsCount,
                meta: 'Count of Request',
                description: 'A request try to withdraw money from contract.Request must be approved by approvers'

            }, {
                header: approversCount,
                meta: "Number of approvers",
                description: 'Number of people already donated to campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The Balance is how much  money this campaign has left to spend'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
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

    return CampaignShow;
}(_react.Component);

;

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOzs7Ozs7O0ksQUFJYjs7Ozs7Ozs7Ozs7c0NBc0JTO3lCQVFQLEtBUk8sQUFRRjtnQkFSRSxBQUdQLDZCQUhPLEFBR1A7Z0JBSE8sQUFJUCxpQkFKTyxBQUlQO2dCQUpPLEFBS1AsdUJBTE8sQUFLUDtnQkFMTyxBQU1QLHdCQU5PLEFBTVA7Z0JBTk8sQUFPUCxpQkFQTyxBQU9QLEFBSUo7O2dCQUFNO3dCQUNGLEFBQ1UsQUFDUjtzQkFGRixBQUVRLEFBQ047NkJBSEYsQUFJSSxBQUNGO3VCQUFNLEVBQUUsY0FOQSxBQUNWLEFBS1EsQUFBZTs7QUFMdkIsQUFDRSxhQUZRO3dCQVNWLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBWk0sQUFTVixBQUlNO0FBSk4sQUFDSTt3QkFNRixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQW5CTSxBQWdCUixBQUlJOztBQUpKLEFBQ0U7d0JBT0YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkEzQkksQUF3QlIsQUFJTztBQUpQLEFBQ0k7d0JBTU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDlCLEFBQ1csQUFBMkIsQUFDbEM7c0JBRkosQUFFUyxBQUNMOzZCQWpDVixBQUFjLEFBOEJSLEFBSUksQUFJUjtBQVJJLEFBQ0k7O2lEQU9ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFFVjtBQUZVO2FBQUE7Ozs7aUNBYUQsQUFDSjttQ0FDRSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUdFO0FBSEY7QUFBQSxhQUFBLGtCQUdFLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ007QUFETjtBQUFBLCtCQUNPLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDTTtBQUROO0FBQUEsK0JBQ08sY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQUROLEFBQ00sQUFDSyxBQUFLLEFBR1YsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWlCLFNBQVMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDOzhCQUF0QztnQ0FQaEIsQUFDTSxBQUtNLEFBQ0ksQUFLVjtBQUxVO2tDQUtULGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNTO0FBRFQ7QUFBQSwrQkFDUyxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDQztBQUREOytCQUNDLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBcEI1QixBQUNFLEFBR0UsQUFZTSxBQUNJLEFBQ1MsQUFDQyxBQUNJLEFBVy9COzs7OztpSCxBQWxINEI7Ozs7O2lDQUNsQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOztpQ0FBOUM7QTs7NkNBS0ssTUFBQSxBQUFNLE1BRFgsQUFDaUIsQUFDcEI7eURBQW9CLFFBRmpCLEFBRWlCLEFBQVEsQUFDNUI7NkNBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7bURBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0RBQWUsUUFMWixBQUtZLEFBQVEsQUFDdkI7NkNBQVEsUSxBQU5MLEFBTUssQUFBUTtBQU5iLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVRlOztBQXFIMUIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikc6L2tpY2tzdGFydCJ9