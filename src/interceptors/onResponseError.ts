import axios, { AxiosError, AxiosResponse } from 'axios';
import { refreshToken } from 'common';
import { routes } from 'routes';

export const onResponseError = async (
	error: AxiosError
): Promise<AxiosError | AxiosResponse> => {
	let refresh = false;

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
				window.location.href = routes.identityProvider.login;
			}
		}
	}

	refresh = false;
	return Promise.reject(error);
};
