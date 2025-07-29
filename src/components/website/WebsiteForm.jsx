import React from "react";
import { ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function WebsiteForm({ selectedTemplate, onBack }) {
  const [formData, setFormData] = React.useState({
    businessName: "",
    businessAddress: "",
    phone: "",
    email: "",
    password: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment
    console.log("Website order submitted:", { template: selectedTemplate, ...formData });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="icon" onClick={onBack} className="rounded-lg">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Customize Your Website
              </h2>
              <p className="text-slate-600">
                Template: {selectedTemplate?.name}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                  placeholder="Your Salon Name"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="businessAddress">Business Address *</Label>
              <Input
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleChange('businessAddress', e.target.value)}
                placeholder="123 Main St, City, State 12345"
                required
                className="mt-1"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="Create a secure password"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Business Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Tell us about your salon, services, specialties..."
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Payment Button */}
            <div className="pt-6 border-t border-slate-200">
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay $99 & Create Website
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24hr Delivery
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 h-fit">
          <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
          
          {/* Selected Template */}
          <div className="bg-slate-800 rounded-lg p-4 mb-6">
            <img
              src={selectedTemplate?.image}
              alt={selectedTemplate?.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold">{selectedTemplate?.name}</h4>
            <p className="text-slate-300 text-sm">{selectedTemplate?.description}</p>
          </div>

          {/* What's Included */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">What's Included:</h4>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Professional website setup</li>
              <li>✓ Free hosting for 1 year</li>
              <li>✓ Mobile-responsive design</li>
              <li>✓ Free booking app integration</li>
              <li>✓ Domain setup assistance</li>
              <li>✓ Training call included</li>
              <li>✓ 24-hour delivery</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex justify-between items-center text-lg mb-2">
              <span>Website Setup</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-300 mb-4">
              <span>Hosting (1 year)</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold border-t border-slate-700 pt-4">
              <span>Total</span>
              <span>$99.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}