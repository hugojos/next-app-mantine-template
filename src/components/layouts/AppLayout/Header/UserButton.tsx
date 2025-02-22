// "use client";
// import { Button, Menu } from "@mantine/core";
// import UserAvatarActionIcon from "src/components/ui/UserAvatarButton";
// import { useModalManager } from "src/contexts/ModalManagerContext";
// import { useAuth } from "src/contexts/SupabaseAuthContext";
// import UploadPostButton from "./UploadPostButton";
// import UserMenu from "./UserMenu";

// interface UserButtonProps {}

// const UserButton = ({}: UserButtonProps) => {
//   const { pdmUser } = useAuth();
//   const { showModal } = useModalManager();

//   const iconUser = pdmUser ? (
//     <UserAvatarActionIcon user={pdmUser} size={"input-md"} variant="default" />
//   ) : (
//     <Button
//       onClick={pdmUser ? undefined : () => showModal("auth.login")}
//       size="md"
//       color="orange.9"
//     >
//       Acceder
//     </Button>
//   );

//   if (pdmUser)
//     return (
//       <>
//         <UploadPostButton visibleFrom="md" />
//         <Menu position="bottom-end">
//           <Menu.Target>{iconUser}</Menu.Target>
//           <Menu.Dropdown>
//             <UserMenu />
//           </Menu.Dropdown>
//         </Menu>
//       </>
//     );

//   return (
//     <>
//       <UploadPostButton visibleFrom="md" />
//       {iconUser}
//     </>
//   );
// };

// export default UserButton;
