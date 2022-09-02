import axios, { AxiosRequestConfig } from 'axios';
import { refreshToken } from 'common';
import { routes } from 'routes';

export const onRequest = async (
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
			window.location.href = routes.identityProvider.login;
		}
	}

	return request;
};
