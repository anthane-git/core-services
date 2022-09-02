import axios from 'axios';
import { onRequest } from '../interceptors/onRequest.mjs';
import { onRequestError } from '../interceptors/onRequestError.mjs';
import { onResponse } from '../interceptors/onResponse.mjs';
import { onResponseError } from '../interceptors/onResponseError.mjs';

/**
 * Create Axios client instance.
 */

const client = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
client.interceptors.request.use(onRequest, onRequestError);
client.interceptors.response.use(onResponse, onResponseError);

export { client };
