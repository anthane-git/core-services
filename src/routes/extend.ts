import { routes } from './base';

/**
 * Extend the base route groups.
 */
export const extendRoutes = (routeGroup: object): object => {
	return Object.assign(routes, routeGroup);
};
