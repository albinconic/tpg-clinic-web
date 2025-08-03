import BookNowForm from "@/components/modules/forms/BookNowForm";
import FormSection from "@/components/sections/FormSection";
import HeroSection from "@/components/sections/HeroSection";
import { metaDataHelper } from "@/constants/init";
import { siteConfig } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
title: `Book Now ${metaDataHelper.separator} ${metaDataHelper.title}`,
    description: metaDataHelper.description,
    openGraph: {
        title: `Book Now ${metaDataHelper.separator} ${metaDataHelper.title}`,
        description: metaDataHelper.description,
        url: `${siteConfig.baseUrl}/book-now`,
        siteName: metaDataHelper.title,
        type: metaDataHelper.type,
    },
}

const BookNowPage = () => {

    return (
        <>

           <HeroSection
               title={{
                    heading: "h1",
                    children: <span>Book Your First Session</span>
                     
               }}
               sectionProps={{
                    style: {
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)), url('../images/untitled-35-2.webp')"
                    },
                    className: "!min-h-125",
                }}
                description={{
                    children: (<p className="text-center !max-w-[1020px]">Ready to work together or want to learn more? Complete the form below and tell us a little bit about yourself!<br/><br/>
                    Not quite sure how our services are a best fit? Book a 15-minute Discovery Call - a complimentary 15-minute phone consultation to discuss your concerns and determine if we're the right fit for your rehab, prehab, and wellness goals.</p>)
                }}
                /*button={{
                    children: "Get Started",
                    href: "/book-now"
                }}*/
           />

           <FormSection 
                containerProps={{
                    className: "!max-w-[720px] mx-auto",
                }}
                form={<BookNowForm page={{ title: "Book Now", slug: "book-now" }} />}
           />
          
            
        </>
    );
}

export default BookNowPage;