import {create} from 'zustand';

export const useMLSCStore = create((set) => ({

    sideBarOpen: false,
    setSideBarOpen: (sideBarOpen) => set({ sideBarOpen }),

    showMotherBoard: false,
    setShowMotherBoard: (showMotherBoard) => set({ showMotherBoard }),
}));

