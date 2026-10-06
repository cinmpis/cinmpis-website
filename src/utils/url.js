export function withBase(path = '') {
  if (!path) return path;
  if (/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return path.startsWith('/') ? path : `/${path}`;

  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path === '/') return `${prefix}/`;
  if (path === prefix || path.startsWith(`${prefix}/`)) return path;
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}
