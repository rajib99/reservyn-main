import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoModal from "../shared/VideoModal";

export default function HeroSection() {
  const [showWebsiteVideo, setShowWebsiteVideo] = React.useState(false);
  const [showBookingVideo, setShowBookingVideo] = React.useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            We provide{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              affordable tech support
            </span>{" "}
            to salons
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help build or fix websites, booking apps, and optimize sales for beauty professionals
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to={createPageUrl("GetWebsite")}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get a Website ($99)
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get a Booking App ($0)
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Video Play Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setShowWebsiteVideo(true)}
              className="group flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-indigo-50 transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
              <span className="font-medium">Watch: Website Demo</span>
            </button>

            <button
              onClick={() => setShowBookingVideo(true)}
              className="group flex items-center gap-3 text-slate-700 hover:text-purple-600 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-purple-50 transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
              <span className="font-medium">Watch: Booking App Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modals */}
      <VideoModal
        isOpen={showWebsiteVideo}
        onClose={() => setShowWebsiteVideo(false)}
        videoId="dQw4w9WgXcQ"
        title="Website Demo"
      />
      <VideoModal
        isOpen={showBookingVideo}
        onClose={() => setShowBookingVideo(false)}
        videoId="dQw4w9WgXcQ"
        title="Booking App Demo"
      />
    </section>
  );
}