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

const ReturnToSportPage = () => {

    return (
        <>
            <HeroSection 
                sectionProps={{
                    style: {
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)), url('../images/clinic-website-1-2-3.webp')"
                    }
                }}
                title={{
                    heading: "h1",
                    children: <span>Return to Sport Testing</span>
                }}
                description={{
                    children: "Assess - Don't Guess"
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
                    children: "Why Test?",
                }}
                description={
                    <div>
                        <p>Prehab’s Returning to Sport Testing is designed to assess an individual’s readiness to return to competitive or recreational sports following an injury or surgery!<br/><br/>Far too often, athletes return to play preemptively without proper testing - putting you at high risk of re-injury, chronic pain, and impaired performance.<br/><br/>The goal of our specialized testing protocol is to get you back in the gym, on the court, or on the field performing at your highest level SAFELY! <br/><br/>And the best part is it’s never too early to start! We cater the testing to meet you where you are and tailor the testing to your given sport and activities! If you are putting in all the work in you&#x27;re rehab and training - we want to help you make sure it’s paying off!</p>
                    </div>
                }
                image={{
                    src: "images/clinic-website-9.webp",
                    alt: "Why Test? - Prehabs Returning to Sport Testing"
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
                    children: "What can you expect?",
                }}
                description={
                    <div>
                        <p>First, your Doctor of Physical Therapy will take you through a thorough subjective examination, learning more about your injury, training history, rehab history, and goals to assess your readiness for testing.<br/><br/>Next, you will be taken through a series of evidence-based strength, performance, and agility tests including but not limited to:<br/><br/></p>
                    </div>
                }
                blurbList={{
                    blurbs: [
                        { title: "Objective Strength Testing" },
                        { title: "Force Plate Testing" },
                        { title: "2D Motion Analysis" },
                        { title: "Hop Testing" },
                        { title: "Agility Testing" },
                    ],
                    sectionProps: {
                        className: "blurb-list-v2 !mt-2"
                    }
                }}
                image={{
                    src: "images/clinic-website-3.webp",
                    alt: "What Can You Expect? - Evidence-Based Strength, Performance, and Agility Tests"
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
                    children: "The Results",
                }}
                description={
                    <div>
                        <p>Throughout testing your Doctor of Physical Therapy will guide you through the objectives and results of each test - because what good is testing if you don’t understand why you are doing it or what it means?!<br/><br/>At the end of testing, you, your surgeon, guardian, and/or coach will receive a copy of the results of your testing via your own personalized patient profile. This profile will allow you to track your progress, establish return to sport timelines &amp; goals, and most importantly guide you in the next steps to meet your rehab, training and performance goals<br/><br/>Our RTS testing is designed to get you back on the court or field performing at your best- but most importantly, keeping you safe!</p>
                    </div>
                }
                image={{
                    src: "images/tindeq.webp",
                    alt: "The Results - Personalized Patient Profile for Progress Tracking"
                }}
            />
            
        </>
    );
}

export default ReturnToSportPage;