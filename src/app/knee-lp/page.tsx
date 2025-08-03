import FeatureGridList from "@/components/modules/featuregrid/FeatureGridList";
import BookNowForm from "@/components/modules/forms/BookNowForm";
import FormSection from "@/components/sections/FormSection";
import IntroWithVideoSection from "@/components/sections/IntroWithVideoSection";
import ServicesGridIconSection from "@/components/sections/ServicesGridIconSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TextImageSection from "@/components/sections/TextImageSection";
import TextSection from "@/components/sections/TextSection";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
title: `50% Off Your First Knee Evaluation ${metaDataHelper.separator} ${metaDataHelper.title}`,
    description: metaDataHelper.description,
    openGraph: {
        title: `50% Off Your First Knee Evaluation ${metaDataHelper.separator} ${metaDataHelper.title}`,
        description: metaDataHelper.description,
        url: `${siteConfig.baseUrl}/knee-lp`,
        siteName: metaDataHelper.title,
        type: metaDataHelper.type,
    },
}

const KneeLp = () => {

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .navbar {
                        display: none !important;
                    }
                    `,
                }}
            />

           <TextImageSection
                sectionType="full-width"
                sectionProps={{
                    style: {
                        backgroundColor: "#000000"
                    },
                }}
                 colRightProps={{
                    className: "",
                 }}
                imageSide="right"
                title={{
                   heading: "h1",
                   children: "50% Off Your First Knee Evaluation",
                   className: "h1-title"
                }}
                image={{
                   src: "../images/50-off-first-evaluation.jpg",
                   alt: "Knee Evaluation",
                     className: "!rounded-none"
                }}
                description={
                    <p className="!mt-4 !text-xl">
                        You don’t have to live with knee pain. Our PTs build personalized care plans that treat the root cause, so you can move better, feel stronger, and stay out of pain.<br /><br />
                        *Offer valid through the end of the month
                    </p>
                }
                button={{
                    as: "a",
                    className: "cta-button mt-4",
                    href: "#contact-us",
                    children: "Book Now & Save 50%"
                }}
           />

           <FormSection 
                sectionProps={{
                    style: {
                        backgroundColor: "#111111"
                    },
                    id: "contact-us"
                }}
                containerProps={{
                    className: "mx-auto",
                }}
                title={{
                    children: "Schedule your first evaluation by the end of the month and SAVE 50%!",
                }}
                text={{
                    children: "Submit the form below and a member of our team will be in touch to schedule your FREE 15 minute Discovery Call to discuss your concerns and determine if we’re the right fit for your rehab, Prehab and wellness goals.",
                    className: "!mb-10 !mt-6 !max-w-[900px] mx-auto"
                }}

                form={<BookNowForm page={{ title: "Knee LP", slug: "knee-lp" }} />}
           />

           
           <TextImageSection
                sectionProps={{
                    style: {
                        backgroundColor: "#000000"
                    },
                }}
                imageSide="left"
                title={{
                   heading: "h2",
                   children: "The Problem with Most Knee Rehab? It’s Not Built for You",
                   className: "h2-title-v2 !mb-8"
                }}
                image={{
                   src: "../images/knee-rehab.png",
                   alt: "Knee Rehab",
                }}
                blurbList={{
                    blurbs: [
                        {
                            title: "Real progress takes time",
                            description: "That’s why you get at least a full hour with a Doctor of Physical Therapy."
                        },
                        {
                            title: "Generic plans don’t work",
                            description: "We customize every program around your goals and knee movement - customized to your activity level."
                        },
                        {
                            title: "Treating pain alone won’t keep it away",
                            description: "We build strength, stability, and long-term resilience."
                        },
                        {
                            title: "You’re not just another number",
                            description: "Here, your PT sees the full picture and the whole YOU, not just your knee."
                        }
                    ]
                }}
           />

           <TextSection 
                sectionProps={{
                     style: {
                        backgroundColor: "#111111"
                    },
                }}
                containerProps={{
                    
                }}
                title={{
                    heading: "h2",
                    children: "The PrehabPT Method",
                    className: "h2-title-v2 !mb-2 text-center !mt-0"
                }}
                text={{
                    as: "p",
                    children: "A proven approach that helps you recover faster, move better, and stay injury-free.",
                    className: "text-center"
                }}
                moduleList={[
                    <FeatureGridList
                        sectionProps={{
                            className: "!mt-10",
                        }} 
                        key="feature-grid-list" 
                        gridItems={[
                            {
                                title: "Rehab & Recovery",
                                text: "Get out of pain with expert 1-on-1 care tailored to your injury",
                                image: {
                                    src: "images/recovery-rehab.png",
                                    alt: "Rehab & Recovery"
                                }
                            },
                            {
                                title: "Movement Optimization",
                                text: "Improve mobility and control with guided strength training",
                                image: {
                                    src: "images/movement-optimization.png",
                                    alt: "Movement Optimization"
                                }
                            },
                            {
                                title: "Injury Prevention",
                                text: "Stay pain-free with performance-based training that builds strength, stability",
                                image: {
                                    src: "images/injury-prevention.png",
                                    alt: "Injury Prevention"
                                }
                            },
                        ]} 
                    />
                ]}
           />

           <IntroWithVideoSection 
                title={{heading: "h2", 
                    children: "What We Do", 
                    className: "heading-2"
                }} 
                text={{as: "p", 
                    children: "We take a proactive and individualized approach to meet you where you are today – no more cookie-cutter, one-size-fits-all treatments that make you feel like just another knee, shoulder, or back. With our individualized approach to rehab, we empower you and put you back in control of your health."
                }} 
                video={{
                    src: "https://iframe.mediadelivery.net/embed/347231/9742aa4a-0c65-4833-9f75-71fa3e7967ae?autoplay=false"
                }}
                button={{
                    as: "a", 
                    href: "#contact-us", 
                    className: "cta-button", 
                    children: "LEARN MORE"
                }}
            />

            <ServicesGridIconSection />

            <TestimonialsSection 
                sectionProps={{
                    className: "clear-both",
                     style: {
                        backgroundColor: "#000000"
                    },
                }} 
                title={{
                    heading: "h5",
                    title: "Testimonials",
                    style:{
                        color: "#888888",
                        marginBottom: "8px !important"

                    }
                }}
                description={{
                    heading: "h3",
                    title: "Life After Knee Pain: What Our Clients Say",
                    className: "heading-3 !mb-12 !mt-0"
                }}
            />
          
            
        </>
    );
}

export default KneeLp;