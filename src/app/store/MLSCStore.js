import {create} from 'zustand';

export const useMLSCStore = create((set) => ({

    showMotherBoard: false,
    setShowMotherBoard: (showMotherBoard) => set({ showMotherBoard }),
}));

