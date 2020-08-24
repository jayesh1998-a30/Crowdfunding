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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                //prevent browser to submit the web page
                                event.preventDefault();

                                //get access to campaign instance
                                campaign = (0, _campaign2.default)(_this.props.address);

                                //loading start

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether') });

                            case 9:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                //if erro is caught errorMessage variable will display err
                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                //loading stops
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    //initialising the states of the variables


    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return (
                //this.onsbmit is just giving referece to onSubmit function not calling it
                _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, _react2.default.createElement('label', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                    value: this.state.value,
                    onChange: function onChange(event) {
                        return _this3.setState({ value: event.target.value });
                    },
                    label: 'ether',
                    labelPosition: 'right',

                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                })), _react2.default.createElement(_semanticUiReact.Message, { error: true,
                    header: 'Oops!',
                    content: this.state.errorMessage,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, 'Contribute!'))
            );
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBSyxBQUFPLEFBQU07O0FBQzFCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFJZjs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBR0Y7bUJBQU8sQUFDRyxBQUNOOzBCQUZHLEFBRVUsQUFDYjtxQixBQUhHLEFBR0s7QUFITCxBQUNILGlCLEFBS0o7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUVQOztBQUNEO3NDQUFBLEFBQU0sQUFFTjs7QUFDTztBQU5DLDJDQU1VLHdCQUFTLE1BQUEsQUFBSyxNQU54QixBQU1VLEFBQW9CLEFBR3JDOztBQUNBOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBSyxjQVZyQixBQVVQLEFBQWMsQUFBMkI7Z0RBVmxDO2dEQUFBO3VDQWE0QixjQUFBLEFBQUssSUFiakMsQUFhNEIsQUFBUzs7aUNBQTFCO0FBYlgsb0RBQUE7Z0RBQUE7dUNBZ0JXLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCOzBDQUMzQixTQURnQyxBQUNoQyxBQUFTLEFBQ2QsRUFGcUMsQUFDckM7MkNBQ00sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQWxCM0MsQUFnQlcsQUFBbUMsQUFFL0IsQUFBa0M7O2lDQUN4QzsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFuQmhELEFBbUJTLEFBQTZDOztnREFuQnREO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXVCSjs7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLFlBeEJ4QixBQXdCSixBQUFjLEFBQWtCOztpQ0FHcEM7O0FBQ0M7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0E1QnRCLEFBNEJQLEFBQWMsQUFBcUI7O2lDQTVCNUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7O0FBUFg7Ozs7Ozs7aUNBd0NRO3lCQUNKOztBQUNLO0FBQ0Q7Z0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVcsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO2tDQUFwRDtvQ0FBQSxBQUdJO0FBSEo7bUNBR0ssY0FBRCxzQkFBQSxBQUFNOztrQ0FBTjtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBREosQUFDSSxBQUVBLHlDQUFBLEFBQUM7MkJBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7OEJBQVUseUJBQUE7K0JBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUFwQyxBQUFTLEFBQWMsQUFBb0I7QUFGdkQsQUFHRTsyQkFIRixBQUdRLEFBQ047bUNBSkYsQUFJZ0I7OztrQ0FKaEI7b0NBTlIsQUFHSSxBQUdJLEFBVVM7QUFWVDtBQUNFLHFDQVNPLEFBQUMsMENBQVEsT0FBVCxBQUNDOzRCQURELEFBQ1UsQUFDVDs2QkFBUyxLQUFBLEFBQUssTUFGZixBQUVxQjs7a0NBRnJCO29DQWhCakIsQUFnQmlCLEFBS25CO0FBTG1CO29DQUtuQixBQUFDLHlDQUFPLFNBQVIsTUFBaUIsU0FBUyxLQUFBLEFBQUssTUFBL0IsQUFBcUM7a0NBQXJDO29DQUFBO0FBQUE7bUJBdkJGLEFBRUksQUFxQkYsQUFLTDs7Ozs7O0FBR0wsQSxBQTFFNkI7O2tCQTBFN0IsQUFBZ0IiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiRzova2lja3N0YXJ0In0=