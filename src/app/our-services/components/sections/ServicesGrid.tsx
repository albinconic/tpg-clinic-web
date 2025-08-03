import ImageElement from "@/components/ui/ImageElement";
import { JSX } from "react";


const ServicesGrid = (): JSX.Element => {
  return (
    <section className="specialty-services-section">
    <div className="w-layout-blockcontainer container-14 w-container">
        <h2 className="servcies-heading">We offer a variety of different services to meet your needs, where you are today!</h2>
        <div className="w-layout-grid specialty-services-cards">
            <div id="w-node-_6d4361af-f054-77a1-0e8a-6db284d9e195-314333ea" className="services-card">
                <img src="images/clinic-website-15-p-500.jpg" loading="lazy" sizes="100vw"  alt="ACL Club Physical Therapy" className="image-9" />
                <div className="h4">ACL Club</div>
                <a href="/acl-club" className="w-inline-block">
                    <div className="button-2 services-button">Learn More</div>
                </a>
            </div>
            <div id="w-node-_6d4361af-f054-77a1-0e8a-6db284d9e1a1-314333ea" className="services-card">
                <img src="images/clinic-website-4-p-500.jpg" loading="lazy" sizes="100vw" alt="Return to Sport Testing Session" className="image-9" />
                <div className="h4">Return to Sport Testing</div>
                <a href="/return-to-sport" className="w-inline-block">
                    <div className="button-2 services-button">Learn More</div>
                </a>
            </div>
            <div id="w-node-_6d4361af-f054-77a1-0e8a-6db284d9e1a5-314333ea" className="services-card">
                <img src="images/clinic-website-12-p-500.jpg" loading="lazy" sizes="100vw" alt="Post-Op Surgical Recovery Session" className="image-9" />
                <div className="h4">Post-Op Surgical Recovery</div>
                <a href="/post-op-care" className="w-inline-block">
                    <div className="button-2 services-button">Learn More</div>
                </a>
            </div>
        </div>
    </div>
</section>
  );
}

export default ServicesGrid;