const { APP_IDP_API_ENTRYPOINT, APP_IDP_VIEW_ENTRYPOINT } = process.env;

export const endpoints = {
	auth: {
		refreshToken: `${APP_IDP_API_ENTRYPOINT}/auth/refresh-token`,
		login: `${APP_IDP_VIEW_ENTRYPOINT}/login?redirect_uri=${window.location.href}`,
		usersMe: `${APP_IDP_API_ENTRYPOINT}/users/me`,
	},
};
