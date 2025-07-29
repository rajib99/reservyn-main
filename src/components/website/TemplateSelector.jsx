import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Elegant Salon",
    description: "Perfect for upscale salons with a luxury focus",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=center",
    features: ["Booking Integration", "Gallery", "Service Menu", "Contact Form"],
    popular: true
  },
  {
    id: 2,
    name: "Modern Studio",
    description: "Clean, minimalist design for contemporary salons",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&crop=center",
    features: ["Online Booking", "Staff Profiles", "Reviews", "Location Map"]
  },
  {
    id: 3,
    name: "Beauty Bar",
    description: "Vibrant and colorful for trendy beauty salons",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop&crop=center",
    features: ["Social Media", "Beauty Blog", "Product Shop", "Testimonials"]
  },
  {
    id: 4,
    name: "Classic Barbershop",
    description: "Traditional styling for barbershops and men's salons",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop&crop=center",
    features: ["Appointment System", "Price List", "About Us", "Contact"]
  },
  {
    id: 5,
    name: "Spa Retreat",
    description: "Serene and calming for spa and wellness centers",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&crop=center",
    features: ["Service Booking", "Treatment Menu", "Wellness Blog", "Gift Cards"]
  },
  {
    id: 6,
    name: "Hair Studio",
    description: "Focused on hair services with portfolio showcase",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop&crop=center",
    features: ["Hair Gallery", "Stylist Bios", "Color Services", "Before/After"]
  }
];

export default function TemplateSelector({ onTemplateSelect, onPreview }) {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Choose Your Template
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Select a professionally designed template that matches your salon's style. 
          All templates are fully customizable and mobile-responsive.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            {/* Template Preview Image */}
            <div className="relative">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {template.popular && (
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}
              <button
                onClick={() => onPreview(template)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Template Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {template.name}
              </h3>
              <p className="text-slate-600 mb-4">
                {template.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Includes:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => onPreview(template)}
                  className="flex-1"
                >
                  Preview
                </Button>
                <Button
                  onClick={() => onTemplateSelect(template)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}