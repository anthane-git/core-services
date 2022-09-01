import axios from 'axios';

const { APP_API_ENTRYPOINT } = process.env;

export const client = axios.create({
	baseURL: APP_API_ENTRYPOINT || undefined,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});
