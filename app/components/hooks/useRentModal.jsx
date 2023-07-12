import { create } from 'zustand';

const useRentModal = create((set) => {
  return {
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  };
});

export default useRentModal;
