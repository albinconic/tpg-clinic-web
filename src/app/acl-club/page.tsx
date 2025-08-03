import HeroSection from "@/components/sections/HeroSection";
import TextImageSection from "@/components/sections/TextImageSection";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import { Metadata } from "next";


export const metadata: Metadata = {
title: `ACL Club ${metaDataHelper.separator} ${metaDataHelper.title}`,
    description: metaDataHelper.description,
    openGraph: {
        title: `ACL Club ${metaDataHelper.separator} ${metaDataHelper.title}`,
        description: metaDataHelper.description,
        url: `${siteConfig.baseUrl}/acl-club`,
        siteName: metaDataHelper.title,
        type: metaDataHelper.type,
    },
}

const AclClubPage = () => {

    return (
        <>
            <HeroSection 
                sectionProps={{
                    style: {
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)), url('../images/acl-club.webp')"
                    }
                }}
                title={{
                    heading: "h1",
                    children: <span>ACL Club</span>
                }}
                description={{
                    children: "Strength, Power, and Agility Group Training"
                }}
                button={{
                    children: "Get Started",
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
                        <p className="paragraph-3">Our 8-week intensive group training program is specifically designed for late-stage ACLers. This unique program offers a blend of strength, power, and agility training to help ACLers get back on the field, the court, and return to the activities they love most! All within a safe, enjoyable, and stimulating environment.<br/><br/>Our program caters to ACLers who are on the brink of recovery - who can see the finish line - but need a bit of additional support to cross it. If you&#x27;re an active person recovering from a chronic ACL injury or have undergone ACL reconstruction surgery, this program could be the perfect fit for you!<br/><br/>It&#x27;s ideal if you&#x27;ve completed your prescribed physical therapy but still lack complete confidence in your physical capability. If you haven&#x27;t yet met your recovery goals and are searching for a secure, effective way to challenge yourself under professional guidance, this program was designed with you in mind!</p>
                    </div>
                }
                image={{
                    src: "images/acl-club-4.webp",
                    alt: "ACL Club Training Session"
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
                        <p className="paragraph-3">To ensure that you are a suitable candidate for the program, we require that you are at least six months out from your surgery or injury and that you already have the capacity for running and jumping.<br/><br/>But why choose Prehab Physical Therapy for your recovery journey? Our testing is grounded in the latest research and utilizes state-of-the-art technology to ensure you&#x27;re ready to return to your desired sport or activity. We conduct personalized 1-on-1 pre-class and post-class testing &amp; screening tailored to the specific demands of your activity and sport. Our commitment is to guide you through your recovery process until you feel and look ready to take on the world again!</p>
                    </div>
                }
                image={{
                    src: "images/acl-club-3.webp",
                    alt: "ACL Club Group Workout"
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
                    children: "By the end of the program",
                }}
                description={
                    <div>
                        <p className="paragraph-3">Our program promises a range of beneficial outcomes. The ultimate aim of this class is to simulate real-life situations to restore your sense of self. We&#x27;re confident that you will see significant increases in your confidence, strength, and also learn how to continue making gains independently after the program.<br/><br/>Upon completing the program, you will feel more confident and stronger, and you&#x27;ll be ready to resume your hobbies and sports without any self-doubt! You&#x27;ll also acquire knowledge on how to independently continue and maximize your gains confidently for a lifetime!</p>
                    </div>
                }
                image={{
                    src: "images/acl-club-7.webp",
                    alt: "Successful ACL Recovery Participants"
                }}
            />
            
        </>
    );
}

export default AclClubPage;