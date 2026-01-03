import Header from "./components/Header";
import Footer from "./components/Footer";
import CtaButton from "./components/CtaButton";
import SectionContainer from "./components/SectionContainer";
import ImpactCard from "./components/ImpactCard";
import InitiativeCard from "./components/InitiativeCard";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-green to-background pt-16">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-off-white mb-6 leading-tight">
            Protecting Kerala&rsquo;s Environment, One Action at a Time.
          </h1>
          <p className="text-lg sm:text-xl text-off-white/90 mb-8 max-w-2xl mx-auto">
            A volunteer-driven environmental movement working on conservation, cleanup, and climate resilience across Kerala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="/volunteer" variant="primary" className="text-lg">
              Join as a Volunteer
            </CtaButton>
            <CtaButton href="#our-impact" variant="secondary" className="text-lg">
              View Our Work
            </CtaButton>
          </div>
          <div className="mt-12 text-sm text-soft-grey">
            [REAL PHOTO: Hero - Environmental Scene with Overlay]
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <SectionContainer id="what-we-do" className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            What We Do
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Our initiatives span across Kerala, focusing on practical environmental action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImpactCard
            icon="🌊"
            title="Coastal & River Cleanups"
            frequency="Monthly"
            location="Kochi"
          />
          <ImpactCard
            icon="🌳"
            title="Tree Plantation & Biodiversity Drives"
            frequency="Quarterly"
            location="Distributed"
          />
          <ImpactCard
            icon="♻️"
            title="Waste Management Awareness"
            frequency="Ongoing"
            location="18 Districts"
          />
          <ImpactCard
            icon="🌍"
            title="Climate & Sustainability Education"
            frequency="Monthly"
            location="Multiple Venues"
          />
        </div>
      </SectionContainer>

      {/* Section 3: Why It Matters */}
      <SectionContainer className="bg-card-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Data-backed environmental challenges facing Kerala.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cta-green mb-2">50+ tons</div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Plastic Pollution</h3>
            <p className="text-soft-grey">
              Removed annually from Kerala&rsquo;s rivers and coastlines
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cta-green mb-2">2,000+</div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Saplings Planted</h3>
            <p className="text-soft-grey">
              Combating deforestation and habitat loss across the state
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cta-green mb-2">5M+</div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Residents at Risk</h3>
            <p className="text-soft-grey">
              Affected by rising sea levels along Kerala&rsquo;s coastline
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 4: Our Impact */}
      <SectionContainer id="our-impact" className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Real numbers from our grassroots work across Kerala.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-cta-green mb-2">5,000+</div>
            <p className="text-off-white/80 font-medium">Volunteers Mobilized</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cta-green mb-2">120+</div>
            <p className="text-off-white/80 font-medium">Cleanup Drives Executed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cta-green mb-2">18</div>
            <p className="text-off-white/80 font-medium">Districts Covered</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cta-green mb-2">50,000+</div>
            <p className="text-off-white/80 font-medium">Saplings Planted</p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 5: Ongoing & Upcoming Initiatives */}
      <SectionContainer className="bg-card-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Ongoing & Upcoming Initiatives
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Join us in these upcoming environmental drives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InitiativeCard
            name="Vembanad Lake Cleanup"
            location="Alappuzha"
            date="January 15, 2025"
            description="Large-scale cleanup of Vembanad backwaters with local fishing communities."
          />
          <InitiativeCard
            name="Wayanad Forest Restoration"
            location="Wayanad"
            date="February 2, 2025"
            description="Native species plantation drive in degraded forest areas."
          />
          <InitiativeCard
            name="Kochi Beach Cleanup"
            location="Kochi"
            date="February 10, 2025"
            description="Monthly coastal cleanup with waste segregation workshop."
          />
          <InitiativeCard
            name="Climate Awareness Workshop"
            location="Thiruvananthapuram"
            date="February 20, 2025"
            description="Youth-focused climate education program in partnership with local schools."
          />
          <InitiativeCard
            name="Periyar River Conservation"
            location="Ernakulam"
            date="March 5, 2025"
            description="River cleanup and water quality monitoring initiative."
          />
        </div>
      </SectionContainer>

      {/* Section 6: Volunteer Onboarding Flow */}
      <SectionContainer className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            How to Get Started
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Your journey from volunteer to local leader in four simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-3xl font-bold text-cta-green mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Sign Up</h3>
            <p className="text-soft-grey">
              Register with your details and area of interest
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-3xl font-bold text-cta-green mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Choose Cause</h3>
            <p className="text-soft-grey">
              Select your preferred cause and location
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-3xl font-bold text-cta-green mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Attend Drive</h3>
            <p className="text-soft-grey">
              Participate in scheduled environmental drives
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-3xl font-bold text-cta-green mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-off-white mb-2">Lead Locally</h3>
            <p className="text-soft-grey">
              Grow into a local coordinator role
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <CtaButton href="/volunteer" variant="primary" className="text-lg">
            Start Your Journey
          </CtaButton>
        </div>
      </SectionContainer>

      {/* Section 7: Partner With Us */}
      <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-off-white/90 mb-8">
            We collaborate with NGOs, educational institutions, businesses, and local communities to amplify environmental action. Whether you&rsquo;re a school organizing eco-clubs, a company seeking CSR partnerships, or a community group wanting to host a cleanup drive, we&rsquo;d love to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="/contact" variant="primary" className="text-lg">
              Collaborate With Us
            </CtaButton>
            <CtaButton href="/initiatives" variant="secondary" className="text-lg">
              View Partnership Projects
            </CtaButton>
          </div>
        </div>
      </SectionContainer>

      {/* Section 8: Testimonials / Community Voices */}
      <SectionContainer className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Community Voices
          </h2>
          <p className="text-lg text-soft-grey max-w-2xl mx-auto">
            Hear from our volunteers and partners across Kerala.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Joining GKV was the best decision. I've met passionate people and seen real change in my community."
            name="Priya Menon"
            city="Kochi"
            role="Volunteer since 2023"
          />
          <TestimonialCard
            quote="The beach cleanup drives are incredibly well-organized. It's inspiring to see hundreds of volunteers working together."
            name="Rahul Krishnan"
            city="Thiruvananthapuram"
            role="Local Coordinator"
          />
          <TestimonialCard
            quote="As a school teacher, partnering with GKV has brought environmental education to life for our students."
            name="Deepa Nair"
            city="Thrissur"
            role="Partner - St. Mary's High School"
          />
          <TestimonialCard
            quote="The tree plantation drive in Wayanad was transformative. Real grassroots action with measurable impact."
            name="Arun Kumar"
            city="Wayanad"
            role="Volunteer"
          />
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}
