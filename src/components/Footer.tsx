import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <> 
            <div className="footer-2">
                <div className="columns-3 f2wf-columns-2">
                    <div className="column-11">
                    <div className="div-block-8">
                        <div className="logo-wrapper-2">
                        <a href="https://theprehabguys.com" className="link-block w-inline-block">
                            <img src="/images/Prehab-Logo-3.png" width={248} alt="The Prehab Guys Logo" className="logo-3" />
                        </a>
                        </div>
                        <div className="social-icons">
                        {[
                            ['Facebook', 'Rectangle-11.png', 'https://www.facebook.com/ThePrehabGuys/'],
                            ['Instagram', 'Rectangle-12.png', 'https://www.instagram.com/theprehabguys/'],
                            ['Twitter', 'Rectangle-13.png', 'https://twitter.com/ThePrehabGuys'],
                            ['YouTube', 'Rectangle-14.png', 'https://www.youtube.com/@ThePrehabGuys/videos'],
                            ['TikTok', 'Rectangle-15.png', 'https://www.tiktok.com/@theprehabguys'],
                            ['LinkedIn', 'Rectangle-16.png', 'https://www.linkedin.com/company/the-prehab-guys'],
                        ].map(([alt, file, link]) => (
                            <a href={link} target="_blank" key={alt} className="w-inline-block">
                            <img src={`/images/${file}`} width={30} height={30} alt={alt} className="rectangle-11" />
                            </a>
                        ))}
                        </div>
                    </div>
                    </div>

                    <div className="small-columns-2 f2wf-small-columns">
                    <div className="column-12">
                        <div className="content-8">
                        <div className="heading-4">Prehab Physical Therapy</div>
                        <div className="footer-links">
                            <a href="/our-services" className="link-block-2 w-inline-block"><div className="services">Services</div></a>
                            <a href="/about-us" className="link-block-5 w-inline-block"><div className="about-us">About</div></a>
                            <a href="/book-now" className="link-block-5 w-inline-block"><div className="schedule">Schedule</div></a>
                            <a href="https://theprehabguys.com/terms-conditions/" className="link-block-6 w-inline-block"><div className="services">Terms and conditions</div></a>
                            <a href="https://theprehabguys.com/privacy-policy/" className="link-block-7 w-inline-block"><div className="services">Privacy Policy</div></a>
                        </div>
                        </div>
                    </div>

                    <div className="column-12">
                        <div className="content-9">
                        <div className="heading-4">Contact Us</div>
                        <div className="footer-links">
                            <a
                            href="https://www.google.com/maps/place/8573+Higuera+St,+Culver+City,+CA+90232,+USA"
                            target="_blank"
                            className="link-block-8 w-inline-block"
                            >
                            <div className="services">8573 Higuera St.<br />Culver City, CA, 90232</div>
                            </a>
                            <a href="mailto:info@theprehabguys.com" className="link-block-4 w-inline-block">
                            <div className="contact-email">Email: info@prehabptla.com</div>
                            </a>
                        </div>
                        <div>
                            <div className="text-block-6">
                            <a className="c-links" href="tel:+13108761600">1 (310) 876-1600</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="column-12">
                        <div className="content-10">
                        <a
                            href="https://www.google.com/maps/place/8573+Higuera+St,+Culver+City,+CA+90232,+USA"
                            target="_blank"
                            className="w-inline-block"
                        >
                            <img src="/images/Map.png" alt="Location Map - Prehab Physical Therapy" className="image-8" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="copyright-2">
                    <div className="text-block-2">
                    Copyright © {new Date().getFullYear()} Prehab
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Footer;