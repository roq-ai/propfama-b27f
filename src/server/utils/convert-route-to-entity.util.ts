const mapping: Record<string, string> = {
  apis: 'api',
  datasets: 'dataset',
  organizations: 'organization',
  properties: 'property',
  securities: 'security',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
