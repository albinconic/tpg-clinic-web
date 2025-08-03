'use client';

import { useEffect } from 'react';

const WebflowInit = () => {
	useEffect(() => {
		const handleInit = () => {
			if (typeof window !== 'undefined' && window.Webflow?.require) {
				window.Webflow.require('ix2').init();
			}
		};

		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			// DOM already loaded
			handleInit();
		} else {
			// Wait for DOM to finish loading
			window.addEventListener('DOMContentLoaded', handleInit);
		}

		return () => {
			window.removeEventListener('DOMContentLoaded', handleInit);
		};
	}, []);

	return null;
};

export default WebflowInit;
