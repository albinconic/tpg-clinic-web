const getDeviceType = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipod|blackberry|iemobile|kindle/.test(ua)) {
        return 'Mobile';
    }

    if (/ipad|tablet|playbook/.test(ua) || (navigator.maxTouchPoints > 1 && /macintosh/.test(ua))) {
        return 'Tablet';
    }

    return 'Web'; // Desktop
}
export default getDeviceType;