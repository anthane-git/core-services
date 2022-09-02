'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var refreshToken = require('../common/refreshToken.js');
var base = require('../routes/base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

const onResponseError = async error => {
  let refresh = false;

  if (error.response?.status === 401 && !refresh) {
    refresh = true;

    try {
      const response = await refreshToken.refreshToken();

      if (response.status === 200) {
        error.config.headers = {
          Authorization: `Bearer ${response.data.access_token}`
        };
        return axios__default["default"](error.config);
      }
    } catch (error) {
      if (axios__default["default"].isAxiosError(error) && error.response?.status === 401) {
        window.location.href = base.routes.identityProvider.login;
      }
    }
  }

  refresh = false;
  return Promise.reject(error);
};

exports.onResponseError = onResponseError;
