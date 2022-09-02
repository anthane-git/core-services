import axios, { AxiosResponse } from 'axios';
import { routes } from 'routes';

export const refreshToken = async (): Promise<AxiosResponse> => {
	const response = await axios.post(
		routes.identityProvider.refreshToken,
		{},
		{ withCredentials: true }
	);

	return response;
};
