import React, { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { useDownloadStore } from '../store/downloadStore';

export const FileDownload: React.FC = () => {
  const { token, setToken, error, setError, setIsDownloading } = useDownloadStore();
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const simulateDownload = async () => {
    setIsDownloading(true);
    setError(null);
    setDownloadStarted(true);
    setDownloadComplete(false);
    setDownloadProgress(0);

    try {
      // Simulate download progress
      for (let progress = 0; progress <= 100; progress += 10) {
        setDownloadProgress(progress);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Create and download the file
      const demoContent = 'This is a demo file content for token: ' + token;
      const blob = new Blob([demoContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `file-${token}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setDownloadComplete(true);
      setTimeout(() => {
        setDownloadStarted(false);
        setDownloadComplete(false);
        setDownloadProgress(0);
      }, 3000);
    } catch (err) {
      setError('Failed to download file. Please check your token and try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token.trim()) {
      setError('Please enter a valid token');
      return;
    }

    await simulateDownload();
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Download File</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Token
          </label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
              setError(null);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your file token"
            disabled={downloadStarted}
          />
        </div>
        
        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        {downloadStarted && !downloadComplete && (
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Downloading file...</span>
              <span className="text-sm font-medium text-gray-700">{downloadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
          </div>
        )}

        {downloadComplete && (
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <CheckCircle className="w-5 h-5" />
            <span>Download complete!</span>
          </div>
        )}

        <button
          type="submit"
          disabled={downloadStarted}
          className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md transition-colors ${
            downloadStarted 
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
        >
          <Download className="w-5 h-5" />
          {downloadStarted ? 'Downloading...' : 'Download File'}
        </button>
      </form>
    </div>
  );
};