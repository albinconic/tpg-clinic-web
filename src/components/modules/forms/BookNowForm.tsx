"use client";

import { useEffect, useRef } from "react";
import mixpanel from "mixpanel-browser";
import getDeviceType from "@/utils/getDeviceType";
import { useHubspotForm } from "@/hooks/useHubspotForm";
import { FormProps } from "@/types/modules/form";
import bookNowDataTracker from "@/lib/tracking/bookNow";

const BookNowForm = ({
    page = { title: "Book Now", slug: "book-now" },
}: FormProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    useHubspotForm({
        portalId: "45638347",
        formId: "fddcad70-5127-4f66-8a83-8a3673b06070",
        region: "na1",
        targetId: "book-now-form-container",
        targetRef: targetRef,
        cssClass: "custom-hubspot-form",
        onFormSubmit: function ($form: any) {
            console.log("✅ HubSpot form submitted");

            const name = $form.find("input[name='firstname']").val() || "";
            const email = $form.find("input[name='email']").val() || "";
            const message = $form.find("textarea[name='TICKET.content']").val() || "";
            const referral = $form.find("select[name='referral_source']").val() || "";
            const formLocation = $form.find("input[name='TICKET.subject']").val() || "";
            const category = $form.find("input[name='TICKET.hs_ticket_category']").val() || "";

            // 🎯 Send event to Mixpanel
            mixpanel.track("Clinic Form Submitted", {
                Name: name,
                Email: email,
                "How can we help you?": message,
                "How did you hear about us?": referral,
                "Form location": page.title,
                product: "Clinic Website",
                platform: getDeviceType(),
            });

            bookNowDataTracker(page);
        }
        
    });

    return (
        <div className="tpg-c-form book-now-form" id="book-now-form-container" ref={targetRef}></div>
    );
}

export default BookNowForm;