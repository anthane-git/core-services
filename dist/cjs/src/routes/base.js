'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('../../config.json.js');

/**
 * Base route groups.
 */

let routes = {
  identityProvider: {
    refreshToken: `${config.IDP_API_ENTRYPOINT}/auth/refresh-token`,
    login: `${config.IDP_VIEW_ENTRYPOINT}/login?redirect_uri=${window.location.href}`,
    usersMe: `${config.IDP_API_ENTRYPOINT}/users/me`
  }
};

exports.routes = routes;
