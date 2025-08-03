import { JSX } from "react";
import { TestimonialsSectionProps } from "@/types/ui";
import TitleElement from "../ui/TitleElement";
import clsx from "clsx";

const TestimonialsSection = ({
    sectionProps,
    containterProps,
    title,
    description,
}: TestimonialsSectionProps): JSX.Element => {

    const { className: sectionClassName, ...sectionPropsRest } = sectionProps ?? {};
    const { className: containerClassName, ...containerPropsRest } = containterProps ?? {};

    return (
        <section className={clsx("tpg-section testimonials-section", sectionClassName)} {...sectionPropsRest}>
            <div className={clsx("tpg-container", containerClassName)} {...containerPropsRest}>
                <div className="testimonials-header">
                    <TitleElement {...title} />

                    {description && (
                        <>
                            {/*<h2>{description}</h2>*/}
                            <TitleElement {...description} />
                        </>
                    )}
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Nate-S.webp" alt="Nate S." />
                            <div>
                                <strong>Nate S.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;As a Strength & Conditioning Coach that suffered a traumatic injury (ankle dislocation & fracture), Adelle and Dorian have been incredible at helping me return to what I love doing, learning so much about the many factors surrounding my injury and how to approach returning to sport..&quot;
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Frank-P.webp" alt="Frank P." />
                            <div>
                                <strong>Frank P.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;I've been to many different chiropractors and physical therapists in the area over the years. My sessions with Arash were much different than any other session I've had with other therapists. A couple weeks ago I was able to summit half-dome, a 19 mile hike—I absolutely would not have been able to do that without Arash and the awesome crew at Prehab.&quot;
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Reyna-3.webp" alt="Reyna P." />
                            <div>
                                <strong>Reyna P.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;I tore my ACL a couple of years ago and was scared, anxious, nervous but luckily Prehab has made the journey before, during and after surgery as enjoyable as possible. It's thanks to Adelle that not only am I stronger than before I tore my ACL but I can now go weeks without thinking about any differences between my right knee and left knee, something that hasn't happened since I got injured!&quot;
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Ellen-C.webp" alt="Ellen C." />
                            <div>
                                <strong>Ellen C.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;I could not recommend Prehab more!! I had just suffered an ankle injury from soccer when a teammate highly recommended Prehab for my recovery, and my experience was nothing but positive. I was back out on the pitch in no time feeling stronger than before and ready to compete again!&quot;
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Armen-P-2.webp" alt="Armen P." />
                            <div>
                                <strong>Armen P.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;After almost a decade of chronic back pain & sciatica, Craig was extremely helpful in my recovery process and helped me view back pain management in a more contemporary, positive manner. Without his feedback and instruction, it is highly unlikely I would be feeling as great as I do today!&quot;
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <img src="images/Chloe-J.jpg" alt="Chloe J." />
                            <div>
                                <strong>Chloe J.</strong><br />
                                <span></span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            &quot;Prehab Physical Therapy is the best physical therapist experience I've ever had. What I admired most about Dorian was his tenacity during my rehab.  Every session, I felt safe and trusted that I was getting better, and for that I am eternally grateful.&quot;
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;