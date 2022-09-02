import { AxiosError } from 'axios';

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	return Promise.reject(error);
};
