import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { endpoints } from './endpoints';
import { client } from './client';

let refresh = false;

const refreshToken = async (): Promise<AxiosResponse> => {
	const response = await axios.post(
		endpoints.auth.refreshToken,
		{},
		{ withCredentials: true }
	);

	return response;
};

const onRequest = async (
	request: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
	try {
		const response = await refreshToken();

		if (response.status === 200) {
			request.headers = {
				Authorization: `Bearer ${response.data.access_token}`,
			};
		}
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 401) {
			window.location.href = endpoints.auth.login;
		}
	}

	return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response;
};

const onResponseError = async (
	error: AxiosError
): Promise<AxiosError | AxiosResponse> => {
	if (error.response?.status === 401 && !refresh) {
		refresh = true;
		try {
			const response = await refreshToken();

			if (response.status === 200) {
				error.config.headers = {
					Authorization: `Bearer ${response.data.access_token}`,
				};

				return axios(error.config);
			}
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				window.location.href = endpoints.auth.login;
			}
		}
	}

	refresh = false;
	return Promise.reject(error);
};

client.interceptors.request.use(onRequest, onRequestError);
client.interceptors.response.use(onResponse, onResponseError);
