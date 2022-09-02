import axios from 'axios';
import {
	onRequest,
	onRequestError,
	onResponse,
	onResponseError,
} from 'interceptors';

/**
 * Create Axios client instance.
 */
export const client = axios.create({
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

client.interceptors.request.use(onRequest, onRequestError);
client.interceptors.response.use(onResponse, onResponseError);
