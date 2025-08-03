import HeroSection from "@/components/sections/HeroSection";
import TextImageSection from "@/components/sections/TextImageSection";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import { Metadata } from "next";


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

const PostOpCarePage = () => {

    return (
        <>
            <HeroSection 
                sectionProps={{
                    style: {
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)), url('../images/316A6499.webp')"
                    }
                }}
                title={{
                    heading: "h1",
                    children: <span>Post Op Care</span>
                }}
                description={{
                    children: "All-inclusive post-operative rehab"
                }}
                button={{
                    children: "Book Now",
                    href: "/book-now"
                }}
            />

            <TextImageSection 
                imageSide="right"
                sectionProps={{
                    style: {
                        backgroundColor: "#1b1b1b"
                    }
                }}
                infoContentContainerProps={{
                    className: "items-center"
                }}
                title={{
                    heading: "h2",
                    className: "h2-title-v2",
                    children: "What is it?",
                }}
                description={
                    <div>
                        <p>Our post-operative rehab packages are an all-inclusive service at a discounted rate to ensure that you get access to our 1-on-1 evaluations, treatments, and specialized technology and programming between sessions.<br/><br/>These services are an excellent fit for those who have recently undergone surgery and need more frequent access to physical therapy and additional resources</p>
                    </div>
                }
                blurbList={{
                    blurbs: [
                        { title: "ACL reconstruction" },
                        { title: "Meniscus surgery" },
                        { title: "Shoulder surgery (labral repair, RC repair, etc)" },
                        { title: "AHip surgery" },
                        { title: "Spine surgery (discectomy, fusion, etc)" },
                    ],
                    sectionProps: {
                        className: "blurb-list-v2 !mt-6"
                    }
                }}
                image={{
                    src: "images/clinic-website-17.webp",
                    alt: "ACL Club - Specialized rehab for ACL reconstruction"
                }}
            />

            <TextImageSection 
                imageSide="left"
                sectionProps={{
                    style: {
                        backgroundColor: "#000000"
                    }
                }}
                infoContentContainerProps={{
                    className: "items-center"
                }}
                title={{
                    heading: "h2",
                    className: "h2-title-v2",
                    children: "What does it include?",
                }}
                description={
                    <div>
                        <p>In addition to your 1-on-1 sessions with your Doctor of Physical Therapy, your post-operative package includes rental of additional post-operative resources and modalities at no additional cost!<br/><br/>Additional Post-operative resources include:</p>
                    </div>
                }
                blurbList={{
                    blurbs: [
                        { title: <><span><strong>Personalized programming</strong> for a comprehensive 7x/wk program - including detailed exercise videos, explanations and communication with your DPT</span></> },
                        { title: <><span><strong>Compression therapy</strong> to help manage recovery and swelling after every session</span></>  },
                        { title: <><span><strong>Personal BFR</strong> home unit to optimize muscle strength and size with your personalized home program</span></>  },
                        { title: <><span><strong>Personal Power Dot</strong> (Muscle Stimulator/NMES/TENS) for home use to maximize recovery and muscle stimulation between sessions</span></>  },
                    ],
                    sectionProps: {
                        className: "blurb-list-v2 !mt-6"
                    }
                }}
                image={{
                    src: "images/Gif-Maker-3-p-1080.png",
                    alt: "ACL Club - Specialized rehab for ACL reconstruction"
                }}
            />

            <TextImageSection 
                imageSide="right"
                sectionProps={{
                    style: {
                        backgroundColor: "#1b1b1b"
                    }
                }}
                infoContentContainerProps={{
                    className: "items-center"
                }}
                title={{
                    heading: "h2",
                    className: "h2-title-v2",
                    children: "What to Expect",
                }}
                description={
                    <div>
                        <p>Our post-operative rehab services include  manual therapy, exercise therapy, home program review, and education to set you up for success from beginning to end!<br/><br/>During this critical recovery period, you won&#x27;t have to share your PT with 1-3 other patients in a crowded gym space with limited equipment. <br/><br/>Our program provides access to cutting-edge rehabilitation technology and personalized programming at every stage of your rehabilitation. <br/><br/>We understand that post-operative care extends beyond merely overcoming pain and being discharged. Our holistic approach ensures that you reach your goals by treating your entire body. That&#x27;s our specialty,!</p>
                    </div>
                }
                image={{
                    src: "images/post-op.webp",
                    alt: "Rehabilitation Technology - Manual therapy, exercise therapy, personalized programming"
                }}
            />
            
        </>
    );
}

export default PostOpCarePage;