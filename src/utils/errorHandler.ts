import React from "react";

interface ErrorContext {
  component?: string;
  user?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  buildId?: string;
}

export class ErrorHandler {
  static logError(error: Error, context: Partial<ErrorContext> = {}) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context: {
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
        url: typeof window !== 'undefined' ? window.location.href : 'SSR',
        buildId: process.env.NEXT_BUILD_ID || 'unknown',
        ...context,
      },
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Logged');
      console.error('Error:', error);
      console.table(errorData.context);
      console.groupEnd();
    }

    // In production, send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example integrations:
      // Sentry.captureException(error, { extra: errorData.context });
      // LogRocket.captureException(error);
      // Custom API endpoint:
      // fetch('/api/errors', { 
      //   method: 'POST', 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData) 
      // }).catch(console.error);
    }

    return errorData;
  }

  static async handleAsyncError(
    asyncFn: () => Promise<void>, 
    context?: Partial<ErrorContext>
  ): Promise<void> {
    try {
      await asyncFn();
    } catch (error) {
      this.logError(error as Error, context);
      throw error; // Re-throw to let Error Boundary catch it
    }
  }

  static handleFormError(error: unknown, formName?: string): Error {
    const formError = error instanceof Error 
      ? error 
      : new Error(`Form error in ${formName || 'unknown form'}: ${String(error)}`);
    
    this.logError(formError, { component: `Form: ${formName}` });
    return formError;
  }

  static handleApiError(error: unknown, endpoint?: string): Error {
    const apiError = error instanceof Error 
      ? error 
      : new Error(`API error at ${endpoint || 'unknown endpoint'}: ${String(error)}`);
    
    this.logError(apiError, { component: `API: ${endpoint}` });
    return apiError;
  }

  // Utility for wrapping components with error handling
  static wrapComponent<T extends object>(
    Component: React.ComponentType<T>,
    componentName: string
  ) {
    return function WrappedComponent(props: T) {
      try {
        return React.createElement(Component, props);
      } catch (error) {
        ErrorHandler.logError(error as Error, { component: componentName });
        throw error;
      }
    };
  }
}

// Global error handlers
export const setupGlobalErrorHandlers = () => {
  // Handle unhandled promise rejections
  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
      ErrorHandler.logError(
        new Error(`Unhandled promise rejection: ${event.reason}`),
        { component: 'Global Promise Handler' }
      );
    });

    // Handle global JavaScript errors
    window.addEventListener('error', (event) => {
      ErrorHandler.logError(
        new Error(`Global error: ${event.error?.message || event.message}`),
        { component: 'Global Error Handler' }
      );
    });
  }
};

export default ErrorHandler;