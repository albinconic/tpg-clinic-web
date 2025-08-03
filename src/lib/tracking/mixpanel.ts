import mixpanel from "mixpanel-browser";

export const initMixpanel = () => {
    if (typeof window === "undefined") return;

    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

    if (!token) {
        console.warn("Mixpanel token is missing");
        return;
    }
    
    mixpanel.init(token, {
        persistence: 'localStorage',
        track_pageview: false
    });
}

export const trackPageView = () => {
    if (typeof window === "undefined") return;

    mixpanel.track_pageview({
        product: "Clinic Website"
    });
}