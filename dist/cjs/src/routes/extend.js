'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

/**
 * Extend the base route groups.
 */

const extendRoutes = routeGroup => {
  return Object.assign(base.routes, routeGroup);
};

exports.extendRoutes = extendRoutes;
