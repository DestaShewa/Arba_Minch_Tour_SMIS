import { create } from 'zustand';

interface NetworkState {
  isOnline: boolean;
  isSimulatedOffline: boolean;
  toggleSimulatedOffline: () => void;
  setOnlineStatus: (status: boolean) => void;
}

export const useNetworkStore = create<NetworkState>((set, get) => ({
  isOnline: navigator.onLine,
  isSimulatedOffline: false,

  toggleSimulatedOffline: () => {
    set({ isSimulatedOffline: !get().isSimulatedOffline });
  },

  setOnlineStatus: (status: boolean) => {
    set({ isOnline: status });
  },
}));

// Listen to browser network changes automatically
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => useNetworkStore.getState().setOnlineStatus(true));
  window.addEventListener('offline', () => useNetworkStore.getState().setOnlineStatus(false));
}