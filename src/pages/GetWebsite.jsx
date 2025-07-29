import React from "react";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import TemplateSelector from "../components/website/TemplateSelector";
import WebsiteForm from "../components/website/WebsiteForm";
import TemplatePreview from "../components/website/TemplatePreview";

export default function GetWebsite() {
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [previewTemplate, setPreviewTemplate] = React.useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to={createPageUrl("Home")}>
              <Button variant="outline" size="icon" className="rounded-lg">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Get Your Website
              </h1>
              <p className="text-slate-600 mt-2">
                Choose a template and customize it for your salon
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 text-sm">
            <div className={`flex items-center gap-2 ${!showForm ? 'text-indigo-600' : 'text-slate-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${!showForm ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}>
                1
              </div>
              Select Template
            </div>
            <div className="w-8 h-px bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${showForm ? 'text-indigo-600' : 'text-slate-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${showForm ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}>
                2
              </div>
              Customize & Pay
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showForm ? (
          <TemplateSelector 
            onTemplateSelect={handleTemplateSelect}
            onPreview={setPreviewTemplate}
          />
        ) : (
          <WebsiteForm 
            selectedTemplate={selectedTemplate}
            onBack={() => setShowForm(false)}
          />
        )}
      </div>

      {/* Template Preview Modal */}
      <TemplatePreview
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
}