import { create } from 'zustand';

const useSearchModal = create((set) => {
  return {
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  };
});

export default useSearchModal;
