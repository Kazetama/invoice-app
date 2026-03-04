"use client";

import HeroSection from "@/components/organism/hero-section";
import AboutSection from "@/components/organism/about-section";
import TechStack from "@/components/organism/tech-stack";
import RightWidgets from "@/components/organism/right-widgets";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">

      {/* LEFT COLUMN: Main Content */}
      <div className="lg:col-span-8 space-y-6">
        <HeroSection />
        <AboutSection />
        {/* <TechStack /> */}
      </div>

      {/* RIGHT COLUMN: Widgets */}
      <div className="lg:col-span-4">
        <RightWidgets />
      </div>

    </div>
  );
}