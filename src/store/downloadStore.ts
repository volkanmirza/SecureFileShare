import { create } from 'zustand';
import { DownloadState } from '../types';

export const useDownloadStore = create<DownloadState>((set) => ({
  token: '',
  isDownloading: false,
  error: null,
  setToken: (token) => set({ token }),
  setIsDownloading: (isDownloading) => set({ isDownloading }),
  setError: (error) => set({ error }),
  reset: () => set({
    token: '',
    isDownloading: false,
    error: null,
  }),
}));