import { JSX } from "react";

const Header = (): JSX.Element => {
    return (
        <>
         {/* GTM noscript */}
            <noscript>
                <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NH92S663"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>

            <div
                data-animation="default"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className="prehab-top-banner-main"
            >
                <div className="prehab-top-banner-main-container">
                <div className="top-left-section">
                    <a href="https://theprehabguys.com/" target="_self">
                    <img
                        src="https://theprehabguys.com/wp-content/uploads/2022/09/top-prehab.png"
                        alt="Prehab"
                    />
                    </a>
                    <a href="https://theprehabguys.com/membership/" target="_self">
                    <img
                        src="https://theprehabguys.com/wp-content/uploads/2022/09/Prehab-App-website-top-bar-transparent.png"
                        alt="Prehab Membership"
                    />
                    </a>
                    <a href="https://library.theprehabguys.com/" target="_self">
                    <img
                        src="https://theprehabguys.com/wp-content/uploads/2022/09/Prehab-Exlib-topbar.png"
                        alt="Exercise Library"
                    />
                    </a>
                    <a href="https://clinic.theprehabguys.com/" target="_self">
                    <img
                        src="https://theprehabguys.com/wp-content/uploads/2022/09/Prehab-PT-topbar.png"
                        alt="Clinic Website"
                    />
                    </a>
                </div>
                <div className="top-right-section social-icons">
                    <a href="https://www.facebook.com/ThePrehabGuys/" target="_blank" className="w-inline-block">
                    <img src="/images/Rectangle-11.png" width={30} height={30} alt="Facebook" className="rectangle-11" />
                    </a>
                    <a href="https://www.instagram.com/theprehabguys/" target="_blank" className="w-inline-block">
                    <img src="/images/Rectangle-12.png" width={30} height={30} alt="Instagram" className="rectangle-11" />
                    </a>
                    <a href="https://twitter.com/ThePrehabGuys" target="_blank" className="w-inline-block">
                    <img src="/images/Rectangle-13.png" width={29} height={30} alt="Twitter" className="rectangle-11" />
                    </a>
                    <a href="https://www.youtube.com/@ThePrehabGuys/videos" className="w-inline-block">
                    <img src="/images/Rectangle-14.png" width={30} height={30} alt="YouTube" className="rectangle-11" />
                    </a>
                    <a href="https://www.tiktok.com/@theprehabguys" target="_blank" className="w-inline-block">
                    <img src="/images/Rectangle-15.png" width={30} height={30} alt="TikTok" className="rectangle-11" />
                    </a>
                    <a href="https://www.linkedin.com/company/the-prehab-guys" className="w-inline-block">
                    <img src="/images/Rectangle-16.png" width={30} height={30} alt="LinkedIn" className="rectangle-11" />
                    </a>
                </div>
                </div>
            </div>

            {/* Navigation bar */}
            <div className="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
                <div className="container-5 w-container">
                <a href="/" className="brand w-nav-brand">
                    <img
                    src="/images/PrehabPT-New-Logo.webp"
                    width={190}
                    alt="Prehab Physical Therapy Logo"
                    className="image-7"
                    srcSet="/images/PrehabPT-New-Logo-p-500.png 500w, /images/PrehabPT-New-Logo-p-800.png 800w, /images/PrehabPT-New-Logo.webp 1201w"
                    sizes="(max-width: 479px) 100vw, 190px"
                    />
                </a>
                <nav role="navigation" className="nav-menu-2 w-nav-menu">
                    <a href="/about-us" className="nav-link-2 w-nav-link">About Us</a>
                    <div className="dropdown w-dropdown" data-hover data-delay={0}>
                    <div className="nav-link-2 w-dropdown-toggle">
                        <div className="icon-3 w-icon-dropdown-toggle"></div>
                        <div className="nav-link-2">Services</div>
                    </div>
                    <nav className="w-dropdown-list">
                        <a href="/our-services" className="dropdown-link-6 w-dropdown-link">All Services</a>
                        <a href="/acl-club" className="dropdown-link-4 w-dropdown-link">ACL Club</a>
                        <a href="/post-op-care" className="dropdown-link-5 w-dropdown-link">Post Op Care</a>
                        <a href="/return-to-sport" className="dropdown-link-6 w-dropdown-link">Return to Sport</a>
                    </nav>
                    </div>
                    <a href="https://prehabpt.janeapp.com/#/discipline/1/treatment/55" className="nav-button w-nav-link schedule-call-button" data-mp-track data-mp-event="Button Clicked" data-mp-props='{"button_name": "Schedule Discovery Call Primary Nav Button"}'>Schedule Discovery Call</a>
                    <a href="/book-now" className="book-now-btn nav-button w-nav-link">Book Now</a>
                </nav>
                <div className="menu-button-3 w-nav-button">
                    <div className="icon-4 w-icon-nav-menu"></div>
                </div>
                <div className="mobile-above-fold-action">
                    <a href="/book-now" className="mobile-bookbutton book-now-btn">Book Now</a>
                    <a href="https://prehabpt.janeapp.com/#/discipline/1/treatment/55" className="mobile-bookbutton mobile-schedule-callbutton" data-mp-track data-mp-event="Button Clicked" data-mp-props='{"button_name": "Schedule Discovery Call Primary Nav Button"}'>Schedule Discovery Call</a>            
			</div>
                </div>
            </div>

            {/* Book Now Popup */}
            <div className="book-now-popup-wrapper">
                <div className="book-now-popup">
                <span className="bnp-close">x</span>
                <div className="bnp-content">
                    <h4>Are you a:</h4>
                    <div><a href="/book-now">New Patient</a></div>
                    <div><a href="https://prehabpt.janeapp.com/">Returning Patient</a></div>
                </div>
                </div>
            </div>
                
        </>
    )
}

export default Header;