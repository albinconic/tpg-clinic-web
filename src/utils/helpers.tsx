import { headers } from "next/headers";

const getPageId = async (): Promise<string> => {
    const headersList = await headers();
    const path = headersList.get('x-invoke-path') || '/';

    switch (path) {
        case '/':
            return '646fb007f9c7c087e53f00e4';
        case '/about-us':
            return '6488b2009a30d8694719a75b';
        case '/book-now':
            return '64817d7ebc7996f2d76fafad';
        case '/our-services':
            return '649f0d3d677ab98c314333ea';
        case '/post-op-care':
            return '64a353d2d80e5e407a855424';
        case '/return-to-sport':
            return '64a358f8690c6ddc503f6650';
        case '/virtual-coaching':
            return '64a35635669db3747f24471d';
        case '/acl-club':
            return '649f34d55a94635621bafd44';
        default:
            return '';
    }
}

const getPathname = async (): Promise<string> => {
    const headersList = await headers();
    const path = headersList.get('x-invoke-path') || '/';

    return path;
}

export { getPageId, getPathname }