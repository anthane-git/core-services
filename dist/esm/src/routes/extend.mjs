import { routes } from './base.mjs';

/**
 * Extend the base route groups.
 */

const extendRoutes = routeGroup => {
  return Object.assign(routes, routeGroup);
};

export { extendRoutes };
