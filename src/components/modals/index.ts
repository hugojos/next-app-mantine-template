import dynamic from "next/dynamic";

const dynamicModal = (path: string) =>
  dynamic(() => import(`src/components/modals/${path}`), { ssr: false });

export const dynamicModals = {
  example: dynamicModal("module/example")
} as const;
