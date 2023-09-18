const mapping: Record<string, string> = {
  dfdfwes: 'dfdfwe',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
