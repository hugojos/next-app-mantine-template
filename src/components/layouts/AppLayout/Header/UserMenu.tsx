// import { Menu } from "@mantine/core";
// import { IconBookmark, IconLogout, IconUser } from "@tabler/icons-react";
// import LinkPDM from "src/components/ui/LinkPDM";
// import getHref from "src/config/getHref";
// import { useModalManager } from "src/contexts/ModalManagerContext";
// import { useAuth } from "src/contexts/SupabaseAuthContext";
// import useAppContainerStore from "../useAppContainerStore";

// interface UserMenuProps {}

// const UserMenu = ({}: UserMenuProps) => {
//   const { pdmUser, signOut, isAdmin } = useAuth();

//   const { showModal } = useModalManager();

//   const { toggleNavbar } = useAppContainerStore();

//   return (
//     <>
//       <Menu.Label>{pdmUser?.username ?? "Sin nombre de usuario"}</Menu.Label>
//       {isAdmin && (
//         <Menu.Item
//           component={LinkPDM}
//           prefetch={false}
//           href={"/admin/moderar-plantilla"}
//           underline="never"
//           onClick={() => toggleNavbar(false)}
//         >
//           Dashboard
//         </Menu.Item>
//       )}
//       {pdmUser?.username ? (
//         <Menu.Item
//           leftSection={<IconUser />}
//           component={LinkPDM}
//           prefetch={false}
//           href={getHref.user({
//             username: pdmUser?.username,
//           })}
//           underline="never"
//           onClick={() => toggleNavbar(false)}
//         >
//           Mi perfil
//         </Menu.Item>
//       ) : (
//         <Menu.Item
//           leftSection={<IconUser />}
//           onClick={() => {
//             toggleNavbar(false);
//             showModal("user.completeProfile");
//           }}
//         >
//           Mi perfil
//         </Menu.Item>
//       )}
//       <Menu.Item
//         component={LinkPDM}
//         prefetch={false}
//         href={getHref.favorites()}
//         leftSection={<IconBookmark />}
//         onClick={() => toggleNavbar(false)}
//         underline="never"
//       >
//         Mis favoritos
//       </Menu.Item>

//       {/* <Menu.Item
//         hiddenFrom="md"
//         onClick={() => showModal("uploadPost")}
//         leftSection={<IconPhotoUp />}
//       >
//         Subir plantillas
//       </Menu.Item> */}
//       {/* <Menu.Item onClick={() => setColorScheme("light")}>Modo oscuro</Menu.Item> */}
//       <Menu.Item
//         leftSection={<IconLogout />}
//         onClick={() => {
//           toggleNavbar(false);
//           signOut();
//         }}
//       >
//         Cerrar sesión
//       </Menu.Item>
//     </>
//   );
// };

// export default UserMenu;
