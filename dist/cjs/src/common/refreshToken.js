'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var base = require('../routes/base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

const refreshToken = async () => {
  const response = await axios__default["default"].post(base.routes.identityProvider.refreshToken, {}, {
    withCredentials: true
  });
  return response;
};

exports.refreshToken = refreshToken;
