"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionContainer from "@/app/components/SectionContainer";
import CtaButton from "@/app/components/CtaButton";

interface Initiative {
  id: number;
  name: string;
  description: string;
  location: string;
  district: string;
  date: string;
  type: "Cleanup" | "Plantation" | "Awareness";
  status: "Ongoing" | "Completed";
  participants: number;
}

const allInitiatives: Initiative[] = [
  {
    id: 1,
    name: "Vembanad Lake Cleanup",
    description: "Large-scale cleanup of Vembanad backwaters in partnership with local fishing communities. Focus on plastic waste removal and water quality monitoring.",
    location: "Alappuzha",
    district: "Alappuzha",
    date: "January 15, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 250,
  },
  {
    id: 2,
    name: "Wayanad Forest Restoration",
    description: "Native species plantation drive in degraded forest areas. Planting 5,000 saplings of indigenous trees to restore biodiversity.",
    location: "Wayanad",
    district: "Wayanad",
    date: "February 2, 2025",
    type: "Plantation",
    status: "Ongoing",
    participants: 180,
  },
  {
    id: 3,
    name: "Kochi Beach Cleanup",
    description: "Monthly coastal cleanup at Fort Kochi beach with waste segregation workshop for local youth.",
    location: "Kochi",
    district: "Ernakulam",
    date: "February 10, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 320,
  },
  {
    id: 4,
    name: "Climate Awareness Workshop",
    description: "Youth-focused climate education program in partnership with 15 schools. Interactive sessions on climate change impacts and sustainable living.",
    location: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    date: "February 20, 2025",
    type: "Awareness",
    status: "Ongoing",
    participants: 450,
  },
  {
    id: 5,
    name: "Periyar River Conservation",
    description: "River cleanup and water quality monitoring initiative. Removing plastic waste and testing pollution levels at multiple points.",
    location: "Ernakulam",
    district: "Ernakulam",
    date: "March 5, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 200,
  },
  {
    id: 6,
    name: "Thrissur Urban Tree Drive",
    description: "Community plantation drive in urban Thrissur. Planting 2,000 trees along roadsides and public spaces.",
    location: "Thrissur",
    district: "Thrissur",
    date: "December 10, 2024",
    type: "Plantation",
    status: "Completed",
    participants: 280,
  },
  {
    id: 7,
    name: "Kovalam Beach Cleanup",
    description: "Tourist beach cleanup with international volunteer participation. Collected 3 tons of waste in a single day.",
    location: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    date: "November 25, 2024",
    type: "Cleanup",
    status: "Completed",
    participants: 400,
  },
  {
    id: 8,
    name: "Waste Management Workshop Series",
    description: "District-wide workshop series on composting and waste segregation. Reached 2,000+ households.",
    location: "Multiple locations",
    district: "Kollam",
    date: "October 15, 2024",
    type: "Awareness",
    status: "Completed",
    participants: 150,
  },
  {
    id: 9,
    name: "Silent Valley Biodiversity Drive",
    description: "Specialized plantation of endangered species in Silent Valley buffer zone. Expert-led initiative.",
    location: "Palakkad",
    district: "Palakkad",
    date: "March 20, 2025",
    type: "Plantation",
    status: "Ongoing",
    participants: 120,
  },
  {
    id: 10,
    name: "Kannur River Cleanup",
    description: "Cleanup of Valapattanam river banks. Removing accumulated waste and installing signage.",
    location: "Kannur",
    district: "Kannur",
    date: "April 5, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 190,
  },
  {
    id: 11,
    name: "School Climate Education Program",
    description: "Interactive climate change sessions in 20 rural schools across Idukki district.",
    location: "Idukki",
    district: "Idukki",
    date: "September 12, 2024",
    type: "Awareness",
    status: "Completed",
    participants: 600,
  },
  {
    id: 12,
    name: "Kozhikode Beach Restoration",
    description: "Beach cleanup and dune restoration project. Planting coastal vegetation to prevent erosion.",
    location: "Kozhikode",
    district: "Kozhikode",
    date: "August 20, 2024",
    type: "Cleanup",
    status: "Completed",
    participants: 310,
  },
  {
    id: 13,
    name: "Malappuram Wetland Conservation",
    description: "Wetland cleanup and bird habitat restoration. Partnership with Kerala Forest Department.",
    location: "Malappuram",
    district: "Malappuram",
    date: "April 15, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 160,
  },
  {
    id: 14,
    name: "Kasaragod Mangrove Plantation",
    description: "Mangrove restoration along coastal areas. Planting 10,000 mangrove saplings.",
    location: "Kasaragod",
    district: "Kasaragod",
    date: "May 1, 2025",
    type: "Plantation",
    status: "Ongoing",
    participants: 220,
  },
  {
    id: 15,
    name: "Kottayam Lake Cleanup",
    description: "Comprehensive cleanup of Vembanad lake sections in Kottayam. Focus on water hyacinth removal.",
    location: "Kottayam",
    district: "Kottayam",
    date: "March 10, 2025",
    type: "Cleanup",
    status: "Ongoing",
    participants: 270,
  },
];

export default function InitiativesPage() {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [districtFilter, setDistrictFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const districts = Array.from(new Set(allInitiatives.map((i) => i.district))).sort();

  const filteredInitiatives = allInitiatives.filter((initiative) => {
    const matchesType = typeFilter === "All" || initiative.type === typeFilter;
    const matchesDistrict = districtFilter === "All" || initiative.district === districtFilter;
    const matchesStatus = statusFilter === "All" || initiative.status === statusFilter;
    return matchesType && matchesDistrict && matchesStatus;
  });

  return (
    <>
      <Header />
      
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <SectionContainer className="bg-gradient-to-br from-[#1a4d2e] to-[#0d2617]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f1] mb-6">
              Our Initiatives
            </h1>
            <p className="text-xl text-[#f5f5f1]/90 leading-relaxed">
              From beach cleanups to forest restoration, explore our environmental work across Kerala.
            </p>
          </div>
        </SectionContainer>

        {/* Filters */}
        <SectionContainer className="bg-[#1a1a1a]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#f5f5f1] mb-6 text-center">
              Filter Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-[#f5f5f1] mb-2">
                  By Type
                </label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a]"
                >
                  <option value="All">All Types</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Awareness">Awareness</option>
                </select>
              </div>

              <div>
                <label htmlFor="district-filter" className="block text-sm font-medium text-[#f5f5f1] mb-2">
                  By District
                </label>
                <select
                  id="district-filter"
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a]"
                >
                  <option value="All">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="status-filter" className="block text-sm font-medium text-[#f5f5f1] mb-2">
                  By Status
                </label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-[#f5f5f1] focus:outline-none focus:ring-2 focus:ring-[#5fa86a]"
                >
                  <option value="All">All Status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-[#f5f5f1]/70">
              Showing {filteredInitiatives.length} of {allInitiatives.length} initiatives
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInitiatives.map((initiative) => (
              <div
                key={initiative.id}
                className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 hover:border-[#5fa86a] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      initiative.type === "Cleanup"
                        ? "bg-[#4a7c7e]/20 text-[#4a7c7e]"
                        : initiative.type === "Plantation"
                        ? "bg-[#5fa86a]/20 text-[#5fa86a]"
                        : "bg-[#8b6f47]/20 text-[#8b6f47]"
                    }`}
                  >
                    {initiative.type}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      initiative.status === "Ongoing"
                        ? "bg-[#5fa86a]/20 text-[#5fa86a]"
                        : "bg-[#f5f5f1]/20 text-[#f5f5f1]/70"
                    }`}
                  >
                    {initiative.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#f5f5f1] mb-2">
                  {initiative.name}
                </h3>

                <p className="text-[#f5f5f1]/70 text-sm mb-4">
                  {initiative.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <p className="flex items-center text-[#f5f5f1]/70">
                    <svg className="w-4 h-4 mr-2 text-[#5fa86a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {initiative.location}
                  </p>
                  <p className="flex items-center text-[#f5f5f1]/70">
                    <svg className="w-4 h-4 mr-2 text-[#5fa86a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {initiative.date}
                  </p>
                  <p className="flex items-center text-[#f5f5f1]/70">
                    <svg className="w-4 h-4 mr-2 text-[#5fa86a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {initiative.participants} participants
                  </p>
                </div>

                {initiative.status === "Ongoing" && (
                  <CtaButton href="/volunteer" variant="primary" className="w-full">
                    Join this drive
                  </CtaButton>
                )}
              </div>
            ))}
          </div>

          {filteredInitiatives.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#f5f5f1]/70 text-lg">
                No initiatives match your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer className="bg-gradient-to-br from-[#1a4d2e] to-[#0d2617]">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#f5f5f1] mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-[#f5f5f1]/90 mb-8">
              Join our upcoming drives and be part of Kerala&rsquo;s environmental movement.
            </p>
            <CtaButton href="/volunteer" variant="primary" className="text-lg">
              Sign Up as Volunteer
            </CtaButton>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}
