'use client';

import { useCallback, useState } from 'react';

interface UseErrorBoundaryReturn {
  captureError: (error: Error) => void;
  reset: () => void;
}

export const useErrorBoundary = (): UseErrorBoundaryReturn => {
  const [, setError] = useState<Error | null>(null);

  const captureError = useCallback((error: Error) => {
    setError(() => {
      throw error;
    });
  }, []);

  const reset = useCallback(() => {
    setError(null);
  }, []);

  return { captureError, reset };
};

// Async error handler for promises
export const useAsyncError = () => {
  const { captureError } = useErrorBoundary();

  return useCallback(
    (error: Error) => {
      captureError(error);
    },
    [captureError]
  );
};

// Hook for handling form errors
export const useFormErrorBoundary = () => {
  const { captureError } = useErrorBoundary();

  const handleFormError = useCallback(
    (error: unknown, formName?: string) => {
      const formError = error instanceof Error 
        ? error 
        : new Error(`Form error in ${formName || 'unknown form'}: ${String(error)}`);
      
      captureError(formError);
    },
    [captureError]
  );

  return { handleFormError };
};

export default useErrorBoundary;