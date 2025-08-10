"use client";

import { useEffect } from "react";
import { setupGlobalErrorHandlers } from "@/utils/errorHandler";

const GlobalErrorSetup = () => {
  useEffect(() => {
    setupGlobalErrorHandlers();
  }, []);
  
  return null;
}

export default GlobalErrorSetup;