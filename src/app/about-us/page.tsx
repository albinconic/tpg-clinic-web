import HeroSection from "@/components/sections/HeroSection";
import TextImageSection from "@/components/sections/TextImageSection";
import TextSection from "@/components/sections/TextSection";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import MeetYourDoctors from "./components/sections/MeetYourDoctors";
import { TeamModalProvider } from "@/context/TeamModalContext";

export const metadata: Metadata = {
title: `Post Op Care ${metaDataHelper.separator} ${metaDataHelper.title}`,
    description: metaDataHelper.description,
    openGraph: {
        title: `Post Op Care ${metaDataHelper.separator} ${metaDataHelper.title}`,
        description: metaDataHelper.description,
        url: `${siteConfig.baseUrl}/post-op-care`,
        siteName: metaDataHelper.title,
        type: metaDataHelper.type,
    },
}

const AboutUsPage = () => {

    return (
        <>

            <TextImageSection 
                imageSide="left"
                sectionProps={{
                    style: {
                        backgroundColor: "#1b1b1b"
                    },
                    className: "col-1-55"
                }}
                containerProps={{
                    className: "!max-w-[1420px]"
                }}
                infoContentContainerProps={{
                    className: "items-center"
                }}
                title={{
                    heading: "h1",
                    className: "h1-title",
                    children: "Why Choose Prehab Physical Therapy?",
                }}
                image={{
                    src: "images/Prehab pt-about us.webp",
                    alt: "Team of physical therapists at Prehab Physical Therapy assisting a patient."
                }}
            />


            <TextSection 
                containerProps={{
                    className: "!max-w-[1020px] !pb-2",
                }}
                title={{
                    heading: "h4",
                    children: "At Prehab Physical Therapy, we believe that...",
                }}
                blurbList={{
                    blurbs: [
                        {title: "In-person Physical Therapy should be 1-on-1 between you and a Doctor of Physical Therapy to help you reach your full potential!"},
                        {title: "When it comes to rehabbing an injury, recovering after surgery, or working on performance — the treatment plan should be a collaboration between you, your doctor, coach etc - it's a team effort! "},
                        {title: "Your movement goals and your lifestyle should not be limited to what your insurance company is willing to cover!"},
                        {title: "Most aches & pains and injuries can be prevented with the right education and the right exercise programming at the right time!"},
                        {title: "A proactive approach to your health requires injury prevention & performance-based exercises based on your prehab needs analysis."},
                        {title: "By coming to Prehab Physical Therapy, you are taking back control of your health. You'll be in the driver seat learning how to rehab, train, and recover smarter and more efficiently. This is your opportunity to reach your goals and get you back to YOU!"},
                    ],
                    sectionProps: {
                        className: "blurb-list-v2 ul-li-space-2 !mt-6"
                    }
                }}
            />
            
            <TeamModalProvider>
                <MeetYourDoctors />
            </TeamModalProvider>
            

          
            
        </>
    );
}

export default AboutUsPage;