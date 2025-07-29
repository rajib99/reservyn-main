import React from "react";
import { Check, Globe, Smartphone, Clock, CreditCard, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Website Service */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Get a Website
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                It is a 2-step process: select one of our available templates, then fill out a form 
                with your business name, etc., and make the payment. We will deliver the customized 
                website within 24 hours with free hosting and schedule a call to show you how to 
                manage the website and bookings.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Globe, text: "Free hosting" },
                  { icon: Smartphone, text: "Responsive mobile design" },
                  { icon: Users, text: "Free customization" },
                  { icon: Check, text: "Domain setup help" },
                  { icon: CreditCard, text: "Free booking app embed" },
                  { icon: Headphones, text: "Screen-share assistance" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link to={createPageUrl("GetWebsite")}>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Building Your Website
                </Button>
              </Link>
            </div>

            {/* Website Preview Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
                  alt="Professional salon website design"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Globe className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking App Service */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Booking App Preview Image */}
            <div className="relative lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                  alt="Salon booking app interface"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Get a Booking App
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                This is a free app you can sign up for. You can manage your bookings from the backend, 
                receive payments from customers, and withdraw funds at any time. No monthly fees.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: CreditCard, text: "Accept payments" },
                  { icon: Clock, text: "Real-time booking" },
                  { icon: Users, text: "Customer management" },
                  { icon: Check, text: "No monthly fees" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Booking App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}