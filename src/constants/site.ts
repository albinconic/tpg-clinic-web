import { SiteConfig } from "@/types/config"

export const siteConfig: SiteConfig = {
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
}
