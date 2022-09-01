import { IDP_API_ENTRYPOINT, IDP_VIEW_ENTRYPOINT } from '../config.json';

export const endpoints = {
	auth: {
		refreshToken: `${IDP_API_ENTRYPOINT}/auth/refresh-token`,
		login: `${IDP_VIEW_ENTRYPOINT}/login?redirect_uri=${window.location.href}`,
		usersMe: `${IDP_API_ENTRYPOINT}/users/me`,
	},
};
