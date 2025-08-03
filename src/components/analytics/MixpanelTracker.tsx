'use client';

import { useEffect } from "react";
import { initMixpanel, trackPageView } from "@/lib/tracking/mixpanel";

const MixpanelTracker = () => {
    useEffect(() => {
		initMixpanel();
		trackPageView();
	}, []);

    return null;
}

export default MixpanelTracker;