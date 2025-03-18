import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { useUploadStore } from '../store/uploadStore';

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

export const FileUpload: React.FC = () => {
  const { setFile, setError, setToken, setIsUploading, setProgress } = useUploadStore();

  const generateToken = () => {
    // Generate a random token of 12 characters
    return Math.random().toString(36).substring(2, 14);
  };

  const simulateUpload = async (file: File) => {
    setIsUploading(true);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(i);
    }
    
    setIsUploading(false);
    setProgress(100);
    
    // Generate and set token after upload is complete
    const newToken = generateToken();
    setToken(newToken);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file.size > MAX_FILE_SIZE) {
      setError('File size exceeds 100MB limit');
      return;
    }
    
    setFile(file);
    setError(null);
    
    // Start upload simulation
    await simulateUpload(file);
  }, [setFile, setError, setIsUploading, setProgress, setToken]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-lg transition-colors ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-gray-600">
        <Upload className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">
          {isDragActive
            ? 'Drop the file here'
            : 'Drag & drop a file here, or click to select'}
        </p>
        <p className="mt-2 text-sm text-gray-500">Maximum file size: 100MB</p>
      </div>
    </div>
  );
};