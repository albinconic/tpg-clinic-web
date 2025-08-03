import { Metadata } from "next";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import HeroSection from "@/components/sections/HeroSection";
import TextSection from "@/components/sections/TextSection";
import ServicesGrid from "./components/sections/ServicesGrid";
import AdditionalBenefits from "./components/sections/AdditionalBenefits";

export const metadata: Metadata = {
    title: `Our Services ${metaDataHelper.separator} ${metaDataHelper.title}`,
    description: metaDataHelper.description,
    openGraph: {
        title: `Our Services ${metaDataHelper.separator} ${metaDataHelper.title}`,
        description: metaDataHelper.description,
        url: `${siteConfig.baseUrl}/our-services`,
        siteName: metaDataHelper.title,
        type: metaDataHelper.type,
    },
}

const OurServicesPage = () => {

    return (
        <>
            <HeroSection 
                title={{
                    heading: "h1",
                    children: <span>PREHAB PHYSICAL THERAPY SERVICES</span>
                }}
                sectionProps={{
                    style: {
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, .31), rgba(0, 0, 0, .31)), url('../images/treatment-2.webp')"
                    }
                }}
            />

            <TextSection
                sectionProps={{
                    style: {
                        backgroundColor: "#1b1b1b"
                    }
                }} 
                containerProps={{
                    className: "!max-w-[1020px]",
                }} 
                text={{
                    as: "div",
                    children: (
                        <div>
                            [P]rehab physical therapists have a combined experience of 30+ years treating thousands of patients who have presented with a wide variety of aches &amp; pains, injuries, and surgeries. We feel confident our skillsets &amp; experiences are capable of helping you take control of your body and your health!<br /><br/>[P]rehab PT utilizes the latest in rehab &amp; performance technology coupled with evidence-based training methods to deliver exceptional service results. Don&#x27;t just take our word for it, we will prove it with objective data during your plan of care.<br /><br />This is not your average physical therapy experience. With coffee on tap, a private gym space, shower facilities, &amp; one-on-one care, our concierge-style level of care is designed to help you feel seen, heard and valued, because we believe that you deserve the best! 
                    </div>
                    )
                }} 
                button={{
                    as: "a",
                    children: "Schedule Appointment",
                    className: "cta-button",
                    href: "/book-now"
                }}
            />

            <ServicesGrid />

            <AdditionalBenefits />
        </>
    )
    
}

export default OurServicesPage;