export interface FileUploadState {
  file: File | null;
  token: string | null;
  isUploading: boolean;
  progress: number;
  error: string | null;
  setFile: (file: File | null) => void;
  setToken: (token: string | null) => void;
  setIsUploading: (isUploading: boolean) => void;
  setProgress: (progress: number) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export interface DownloadState {
  token: string;
  isDownloading: boolean;
  error: string | null;
  setToken: (token: string) => void;
  setIsDownloading: (isDownloading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}