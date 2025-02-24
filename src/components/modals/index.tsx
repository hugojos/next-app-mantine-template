import { Loader, Overlay } from "@mantine/core";
import dynamic from "next/dynamic";

const dynamicModal = (path: string) =>
  dynamic(() => import(`src/components/modals/${path}`), {
    ssr: false,
    loading: () => (
      <Overlay className="flex justify-center pt-36">
        <Loader />
      </Overlay>
    )
  });

export const dynamicModals = {
  example: dynamicModal("module/example")
} as const;
