'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var onRequest = require('../interceptors/onRequest.js');
var onRequestError = require('../interceptors/onRequestError.js');
var onResponse = require('../interceptors/onResponse.js');
var onResponseError = require('../interceptors/onResponseError.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/**
 * Create Axios client instance.
 */

const client = axios__default["default"].create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
client.interceptors.request.use(onRequest.onRequest, onRequestError.onRequestError);
client.interceptors.response.use(onResponse.onResponse, onResponseError.onResponseError);

exports.client = client;
