import { create } from "zustand";

export const useMLSCStore = create((set) => ({
  showMotherBoard: false,
  setShowMotherBoard: (showMotherBoard) => set({ showMotherBoard }),

  teleporting: true,
  setTeleporting: (teleporting) => set({ teleporting }),

  domain: "",
  setDomain: (domain) => set({ domain }),
}));
