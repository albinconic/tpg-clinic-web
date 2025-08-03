import Image from "next/image";
import VideoBackgroundSection from "@/components/sections/VideoBackgroundSection";
import TitleElement from "@/components/ui/TitleElement";
import TextElement from "@/components/ui/TextElement";
import VideoElement from "@/components/ui/video/VideoElement";
import ServicesGridIconSection from "@/components/sections/ServicesGridIconSection";
import IntroWithVideoSection from "@/components/sections/IntroWithVideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TextImageSection from "@/components/sections/TextImageSection";
import { BlurbItemsProps } from "@/types/modules/blurb";
import CallToActionSection from "@/components/sections/CallToActionSection";
import FaqSection from "@/components/sections/FaqSection";
import TextSection from "@/components/sections/TextSection";
import TestimonialList from "@/components/modules/testimonials/TestimonialList";
import testimonialsData from "@/constants/testimonials";

export default function HomePage() {

	const ourMethods: BlurbItemsProps[] = [
		{
			title: "Get out of pain",
			description: "Rehab after surgery or recover from an injury following expert guidance"
		},
		{
			title: "Optimize movement",
			description: "Learn proper exercise technique to improve your joint mobility, muscle strength, and overall performance"
		},
		{
			title: "Reduce your risk of injury",
			description: "Perform prehab exercises specific to your needs analysis to help prevent repeat or new injuries"
		}
	];

  return (
	<>
		<VideoBackgroundSection 
			posterUrl="https://uploads-ssl.webflow.com/646fb007f9c7c087e53f00d8/64d56aa77fb235e9043251b6_hero video slo mo-poster-00001.jpg" 
			mp4Url="https://uploads-ssl.webflow.com/646fb007f9c7c087e53f00d8/64d56aa77fb235e9043251b6_hero video slo mo-transcode.mp4" 
			webmUrl="https://uploads-ssl.webflow.com/646fb007f9c7c087e53f00d8/64d56aa77fb235e9043251b6_hero video slo mo-transcode.webm" 
			videoId="2f21d9dc-febf-5522-1bed-8d94759a5700-video" 
			fallbackSrc="documents/hero-video-slo-mo.mp4" 
			fallbackAlt="Rehabilitation video in slow motion"
			controlButtonProps={{
				type: 'button',
			}}
			videoElementProps={{
				dataObjectFit: 'cover',
				dataWfIgnore: true
			}}
		>
			<h1 data-w-id="dd6c6186-81d0-59ad-dcde-f41a2a454a73" style={{opacity: 0}} className="home-hero-heading">PHYSICAL THERAPY REIMAGINED</h1>
			<p data-w-id="c54592a1-81c2-42c7-5be3-cda630e92b61" style={{opacity: 0}} className="hero-subheading-main">Take control of your health with 1-on-1 Prehab services</p>
			<a href="/book-now" data-w-id="dd6c6186-81d0-59ad-dcde-f41a2a454a77" style={{opacity: 0}} className="button-2 main">
			<div className="button-text"></div>BOOK SESSION
						</a>
		</VideoBackgroundSection>

		<IntroWithVideoSection 
			title={{heading: "h2", 
				children: "Why Prehab Physical Therapy?", 
				className: "heading-2"
			}} 
			text={{as: "p", 
				children: "We recognize the individual needs of each client, which is why our unique model emphasizes a personalized 1 on 1 approach to not just rehab, but performance! Our mission is to help you break free from pain and get you back to doing the things you love, living life without limits!"
			}} 
			video={{
				src: "https://iframe.mediadelivery.net/embed/347231/9742aa4a-0c65-4833-9f75-71fa3e7967ae?autoplay=false"
			}}
			button={{/*
				as: "a", 
				href: "#contact-us", 
				className: "cta-button", 
				children: "LEARN MORE"
			*/}}
		/>
	
		<ServicesGridIconSection/>

		<TextImageSection 
			sectionProps={{
				className: "!bg-black"
			}}
			containerProps={{
				className: "!max-w-[1020px]"
			}}
			title={{
				title: "The Method"
			}} 
			blurbList={{
				blurbs: ourMethods
			}}
			imageSide="right"
			image={{
				src: "images/Image.webp",
				alt: "Get Out Of Pain"
			}}
		/>

		<TextSection 
			sectionProps={{
				className: "light-black"
			}} 
			title={{
				heading: "h2",
				children: "The Results",
				className: "h2-title-v2 !mb-12 text-center !mt-0"
			}}
			moduleList={[
				<TestimonialList 
					items={testimonialsData}
				/>
			]}
		/>

		{/*<TestimonialsSection 
			sectionProps={{
				className: "clear-both light-black"
			}} 
			title={{
				heading: "h3",
				title: "The Results",
				className: "heading-2 !mb-14"
			}}
		/>*/}

		<TextImageSection 
			sectionProps={{
				className: "!bg-black col-1-55 pt-4 pb-6"
			}}
			containerProps={{
				className: "!max-w-[1020px]"
			}}
			title={{
				title: "Get to know our Doctors of Physical Therapy",
				heading: "h3",
				className: "h3-title"
			}} 
			image={{
				src: "images/Prehab Pts-compressed.webp",
				alt: "Get to know our Doctors of Physical Therapy"
			}}
			button={{
				as: 'a',
				href: "/book-now",
				className: "cta-button mt-4",
				children: "Meet Our Team"
			}}
		/>

		<CallToActionSection
			title="Work With Us 1-on-1"
			description="In-person or virtually, we're ready to help you accomplish your goals" 
			button={{
				href: "/book-now",
				children: <span className="button-text">GET STARTED</span>
			}}
			style={{
				backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../images/Craig-treatment.webp)"
			}}
		/>

		<FaqSection />

	</>
	);
}

