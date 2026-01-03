"use client";

import { useState, FormEvent } from "react";

export default function VolunteerSignupForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    district: "",
    cause: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission (placeholder for real API)
    setTimeout(() => {
      console.log("Volunteer Signup Form Data:", formData);
      setFormState("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState("idle");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          district: "",
          cause: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-off-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-off-white mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="district" className="block text-sm font-medium text-off-white mb-2">
            District *
          </label>
          <select
            id="district"
            name="district"
            required
            value={formData.district}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
          >
            <option value="">Select District</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Kollam">Kollam</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Idukki">Idukki</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Wayanad">Wayanad</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cause" className="block text-sm font-medium text-off-white mb-2">
          Preferred Cause *
        </label>
        <select
          id="cause"
          name="cause"
          required
          value={formData.cause}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
        >
          <option value="">Select a Cause</option>
          <option value="Coastal & River Cleanups">Coastal & River Cleanups</option>
          <option value="Tree Plantation">Tree Plantation & Biodiversity</option>
          <option value="Waste Management">Waste Management Awareness</option>
          <option value="Climate Education">Climate & Sustainability Education</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-off-white mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-card-bg border border-border rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-cta-green focus:border-transparent"
          placeholder="Tell us about your interest in volunteering..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full px-6 py-3 bg-cta-green text-background font-medium rounded-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cta-green focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {formState === "submitting" ? "Submitting..." : "Sign Up as Volunteer"}
        </button>
      </div>

      {formState === "success" && (
        <div className="p-4 bg-forest-green border border-cta-green rounded-md">
          <p className="text-off-white text-center">
            Thank you for signing up! We&rsquo;ll contact you soon with volunteer opportunities.
          </p>
          <p className="text-soft-grey/60 text-xs text-center mt-2">
            (Demo form - data logged to console)
          </p>
        </div>
      )}

      {formState === "error" && (
        <div className="p-4 bg-red-900/30 border border-red-600 rounded-md">
          <p className="text-off-white text-center">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </form>
  );
}
