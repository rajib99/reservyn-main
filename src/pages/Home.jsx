import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, Check, Star, ArrowRight, Globe, Smartphone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}