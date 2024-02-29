import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoading: false,
    isMenuOverlay: false,
    cart: [],
    checkout: [],
  }),
  persist: true,
});
