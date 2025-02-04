const getHref = {
  ranking: {
    users: () => "/ranking/usuarios"
  },
  favorites: () => `/favoritos`,
  terms: () => `/terminos-y-condiciones`,
  privacy: () => `/politicas-de-privacidad`
} as const;

export default getHref;
