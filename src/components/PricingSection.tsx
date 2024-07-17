"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import { PricingMode } from "@/types/interfaces";

const PricingSection = () => {
  const [mode, setMode] = useState<PricingMode>("monthly");
  const tabStyle =
    "basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer";
  return (
    <section id="pricing" className="flex flex-col gap-8">
      <Heading title="Find a plan to power your projects" isCentered />
    </section>
  );
};

export default PricingSection;
