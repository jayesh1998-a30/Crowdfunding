'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//window.ethereum.enable();

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // window.web3 coming from metamask
    //we are on browser and metamask is running
    //const currProvider = window.web3.currentProvider
    web3 = new _web2.default(window.web3.currentProvider);
    //console.log('currProvider ');
    //console.log(currProvider);
} else {

    //we  are on server  or  the user is not running metamask
    //we are creating our own provider
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/2e759be8994046c6ac8fcbe80e818e11');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBR0E7O0FBRUEsSUFBSSxZQUFKOztBQUdBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWtDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXdFLEFBQ3hFO0FBQ0E7QUFDQTtBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUNBO0FBQ0M7QUFQRCxPQU9LLEFBR0Q7O0FBQ0E7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFPLEFBQUssQUFBTCxrQkFBVSxBQUFWLEFBQVAsQUFDSDtBQUtEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRzova2lja3N0YXJ0In0=