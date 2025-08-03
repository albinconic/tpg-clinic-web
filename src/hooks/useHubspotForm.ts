"use client";

import UseHubspotFormParams from "@/types/hooks/useHubspotForm";
import { useEffect } from "react";

export const useHubspotForm = ({
  portalId,
  formId,
  targetId,
  targetRef,
  region = "na1",
  cssClass = "custom-hubspot-form",
  onFormSubmit,
}: UseHubspotFormParams) => {
  useEffect(() => {
    const loadForm = () => {
      if (!window.hbspt?.forms?.create) return;

      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
        cssClass,
        onFormSubmit,
      });
    };

    // Skip if already loaded & form exists
    const container = targetRef?.current ?? document.getElementById(targetId);
    if (!container || container.querySelector("form")) return;

    if (window.hbspt?.forms?.create) {
      loadForm();
    } else {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    }
  }, [portalId, formId, targetId, region, cssClass, onFormSubmit, targetRef]);
};
