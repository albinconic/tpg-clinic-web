import { JSX } from "react";

const ServicesGridIconSection = ():JSX.Element => {

    return (
        <section className="tpg-section services-section">
            <div className="tpg-container">
                <div className="services-grid">
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="images/icon-injury-prevention.png" alt="Injury Prevention Icon" />
                        </div>
                        <h3>Injury Prevention</h3>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="images/icon-physical-therapy.png" alt="Physical Therapy Icon" />
                        </div>
                        <h3>Physical Therapy</h3>
                    </div>
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="images/icon-performance-training.png" alt="Performance Training Icon" />
                        </div>
                        <h3>Performance Training</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesGridIconSection;