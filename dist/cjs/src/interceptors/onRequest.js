'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var refreshToken = require('../common/refreshToken.js');
var base = require('../routes/base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

const onRequest = async request => {
  try {
    const response = await refreshToken.refreshToken();

    if (response.status === 200) {
      request.headers = {
        Authorization: `Bearer ${response.data.access_token}`
      };
    }
  } catch (error) {
    if (axios__default["default"].isAxiosError(error) && error.response?.status === 401) {
      window.location.href = base.routes.identityProvider.login;
    }
  }

  return request;
};

exports.onRequest = onRequest;
