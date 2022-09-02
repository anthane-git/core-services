'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const onRequestError = error => {
  return Promise.reject(error);
};

exports.onRequestError = onRequestError;
