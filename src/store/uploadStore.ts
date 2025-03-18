import { create } from 'zustand';
import { FileUploadState } from '../types';

export const useUploadStore = create<FileUploadState>((set) => ({
  file: null,
  token: null,
  isUploading: false,
  progress: 0,
  error: null,
  setFile: (file) => set({ file }),
  setToken: (token) => set({ token }),
  setIsUploading: (isUploading) => set({ isUploading }),
  setProgress: (progress) => set({ progress }),
  setError: (error) => set({ error }),
  reset: () => set({
    file: null,
    token: null,
    isUploading: false,
    progress: 0,
    error: null,
  }),
}));