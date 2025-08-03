import { PageProps } from "@/types/ui";

const bookNowDataTracker = (page: PageProps = {slug: "book-now"}) => {
    switch (page.slug) {
      case "book-now":
        window.fbq?.("trackCustom", "form_submission");
        window.dataLayer.push({ event: "form_submitted" });
        break;

      case "knee-lp":
        window.fbq?.("trackCustom", "Clinic - Knee Form Submitted");
        window.dataLayer.push({ event: "form_submission_knee_lp" });
        break;

      case "low-back-lp":
        window.fbq?.("trackCustom", "Clinic - Low Back Form Submitted");
        window.dataLayer.push({ event: "form_submission_lowback_lp" });
        break;

      default:
        console.warn("Unknown tracking source:", page.slug);
    }
}

export default bookNowDataTracker;