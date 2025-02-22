import { create } from "zustand";

interface AppContainerStore {
  openNavbar: boolean;
  toggleNavbar: (collapseNavbar?: boolean) => void;
}

const useAppContainerStore = create<AppContainerStore>((set, get) => ({
  openNavbar: false,
  toggleNavbar: (bool?: boolean) => {
    set({
      openNavbar: bool ?? !get().openNavbar,
    });
  },
}));

export default useAppContainerStore;
