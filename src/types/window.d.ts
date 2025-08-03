export {};

/*declare global {
   interface Window {
    fbq: {
      (...args: any[]): void;
      queue?: any[];
      callMethod?: (...args: any[]) => void;
      push?: (...args: any[]) => void;
      loaded?: boolean;
      version?: string;
    };
    dataLayer: Record<string, any>[];
    WebFont: {
      load: (options: {
        google: { families: string[] };
      }) => void;
    };
    Webflow?: {
			require?: (module: string) => {
				init: () => void;
			};
		};
    hbspt: any;
  } 
}*/

declare global {
  interface Window {
    fbq: {
      (...args: unknown[]): void;
      queue?: unknown[];
      callMethod?: (...args: unknown[]) => void;
      push?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
    dataLayer: Record<string, unknown>[];

    WebFont: {
      load: (options: {
        google: { families: string[] };
      }) => void;
    };

    Webflow?: {
      require?: (module: string) => {
        init: () => void;
      };
    };

    hbspt: {
      forms?: {
        create?: (options: Record<string, unknown>) => void;
      };
    };
  }
}
