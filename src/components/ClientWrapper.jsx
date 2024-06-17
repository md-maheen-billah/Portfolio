"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Provider } from "./Providers";

export default function ClientWrapper({ children }) {
  return (
    <>
      <Provider>
        <Navigation />
        <div className="bg-accent-200 text-accent-500">{children}</div>
      </Provider>
    </>
  );
}
