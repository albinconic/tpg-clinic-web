'use client';

import React from 'react';
import ErrorBoundary from '../errors/ErrorBoundary';

interface PageErrorBoundaryProps {
  children: React.ReactNode;
  pageName?: string;
}

const PageErrorFallback: React.FC<{ pageName?: string }> = ({ pageName }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-lg w-full mx-4">
      <div className="bg-white rounded-xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Error</h1>
        <p className="text-gray-600 mb-6">
          {pageName ? `The ${pageName} page` : 'This page'} encountered an unexpected error. 
          Our team has been notified and is working to fix this issue.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Refresh Page
          </button>
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Go Back
          </button>
          <a
            href="/"
            className="block w-full bg-gray-100 text-gray-600 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const PageErrorBoundary: React.FC<PageErrorBoundaryProps> = ({ children, pageName }) => {
  return (
    <ErrorBoundary
      fallback={<PageErrorFallback pageName={pageName} />}
      onError={(error, errorInfo) => {
        // Log page-specific errors
        console.error(`Page Error in ${pageName || 'Unknown Page'}:`, error, errorInfo);
        
        // In production, send to monitoring service
        if (process.env.NODE_ENV === 'production') {
          // Example: Send to Sentry, LogRocket, etc.
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default PageErrorBoundary;