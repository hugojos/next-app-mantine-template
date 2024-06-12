// const dynamicModal = (path: string) =>
//   dynamic(() => import(`src/components/modals/${path}`), { ssr: false });

// export const dynamicModals = {
//   auth: {
//     login: dynamicModal("auth/Login"),
//   },
//   navbar: {
//     sendMessage: dynamicModal("navbar/SendMessage"),
//   },
//   user: {
//     uploadPost: dynamicModal("user/UploadPost"),
//   },
// } as const;

// const dynamicModal = (path: string) =>
//   dynamic(() => import(`src/components/modals/${path}`), { ssr: false });

export const dynamicModals = {
  // auth: {
  //   login: dynamic(() => import(`src/components/modals/auth/Login`), {
  //     ssr: false,
  //   }),
  // },
  // navbar: {
  //   sendMessage: dynamic(
  //     () => import(`src/components/modals/navbar/SendMessage`),
  //     { ssr: false }
  //   ),
  // },
  // user: {
  //   uploadPost: dynamic(() => import(`src/components/modals/user/UploadPost`), {
  //     ssr: false,
  //   }),
  // },
} as const;

export const ModalIds = Object.keys(dynamicModals).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {}
) as { [P in keyof typeof dynamicModals]: P };
