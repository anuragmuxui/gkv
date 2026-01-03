"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission (placeholder for real API)
    setTimeout(() => {
      console.log("Contact Form Data:", formData);
      setFormState("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState("idle");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#f5f5f1] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f1] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#f5f5f1] mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f1] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a] focus:border-transparent"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full px-6 py-3 bg-[#5fa86a] text-[#1a1a1a] font-medium rounded-md hover:bg-[#4d9558] focus:outline-none focus:ring-2 focus:ring-[#5fa86a] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {formState === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {formState === "success" && (
        <div className="p-4 bg-[#1a4d2e] border border-[#5fa86a] rounded-md">
          <p className="text-[#f5f5f1] text-center">
            Thank you for reaching out! We&rsquo;ll get back to you soon.
          </p>
          <p className="text-[#f5f5f1]/60 text-xs text-center mt-2">
            (Demo form - data logged to console)
          </p>
        </div>
      )}

      {formState === "error" && (
        <div className="p-4 bg-red-900/30 border border-red-600 rounded-md">
          <p className="text-[#f5f5f1] text-center">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </form>
  );
}
