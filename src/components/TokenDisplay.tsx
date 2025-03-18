import React from 'react';
import { Copy } from 'lucide-react';
import { useUploadStore } from '../store/uploadStore';

export const TokenDisplay: React.FC = () => {
  const { token } = useUploadStore();

  if (!token) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
  };

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-sm font-medium text-gray-700 mb-2">Share this token:</p>
      <div className="flex items-center gap-2">
        <code className="flex-1 p-2 bg-white rounded border border-gray-200 font-mono text-sm">
          {token}
        </code>
        <button
          onClick={copyToClipboard}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Copy token"
        >
          <Copy className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};