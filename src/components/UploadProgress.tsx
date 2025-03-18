import React from 'react';
import { useUploadStore } from '../store/uploadStore';
import { CheckCircle } from 'lucide-react';

export const UploadProgress: React.FC = () => {
  const { progress, isUploading, file, token } = useUploadStore();

  if (!file) return null;

  return (
    <div className="w-full mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">
          {file.name}
        </span>
        <span className="text-sm font-medium text-gray-700">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {isUploading ? (
        <p className="text-sm text-blue-600">Preparing for download...</p>
      ) : progress === 100 && token ? (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span>Ready for download!</span>
        </div>
      ) : null}
    </div>
  );
};