import React from "react";

type UseHubspotFormParams = {
  portalId: string;
  formId: string;
  targetId: string; // must match the id of the container div
  targetRef?: React.RefObject<HTMLElement | null>; // optional, if want to use a ref instead of an id
  region?: string;
  cssClass?: string;
  onFormSubmit?: (form: any) => void;
};

export default UseHubspotFormParams;