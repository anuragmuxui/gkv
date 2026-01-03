import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionContainer from "@/app/components/SectionContainer";
import VolunteerSignupForm from "@/app/components/forms/VolunteerSignupForm";

export const metadata = {
  title: "Volunteer - Green Kerala Volunteers",
  description: "Join Green Kerala Volunteers. Sign up to participate in environmental cleanups, tree plantations, and climate education across Kerala.",
};

export default function VolunteerPage() {
  const expectations = [
    {
      title: "Time Commitment",
      description: "Most drives run 2-4 hours on weekends. Attend as many or as few as you like—there's no minimum commitment.",
      icon: "⏰",
    },
    {
      title: "Safety First",
      description: "We provide gloves, bags, and safety gear. Follow coordinator instructions, stay hydrated, and report any injuries immediately.",
      icon: "🛡️",
    },
    {
      title: "All Ages Welcome",
      description: "From students to seniors, everyone can contribute. Minors need guardian consent. We adapt tasks to fitness levels.",
      icon: "👥",
    },
  ];

  const guidelines = [
    "Wear comfortable clothing and closed-toe shoes suitable for outdoor work",
    "Bring a reusable water bottle and sun protection (hat, sunscreen)",
    "Follow waste segregation protocols—coordinators will guide you",
    "Respect local communities and natural habitats during drives",
    "No littering, smoking, or alcohol during volunteer activities",
  ];

  const whatToBring = [
    "Reusable water bottle (stay hydrated!)",
    "Sun protection: hat, sunscreen, sunglasses",
    "Comfortable outdoor clothing and sturdy footwear",
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No experience needed! We provide orientation at each drive and pair new volunteers with experienced coordinators.",
    },
    {
      question: "How do I know about upcoming drives?",
      answer: "After signing up, you'll receive email and WhatsApp updates about drives in your district and preferred cause areas.",
    },
    {
      question: "Can I volunteer with friends or family?",
      answer: "Absolutely! Group registrations are welcome. Just make sure each person fills out the signup form.",
    },
    {
      question: "What if I can't attend a drive I registered for?",
      answer: "No problem—just inform us via WhatsApp or email as soon as possible. No penalties for cancellations.",
    },
    {
      question: "Can I become a coordinator?",
      answer: "Yes! Volunteers who attend 5+ drives and show leadership potential can apply for district coordinator roles.",
    },
    {
      question: "Are there any costs?",
      answer: "Volunteering is completely free. We provide all necessary materials and equipment. You just need to bring yourself and enthusiasm!",
    },
  ];

  const impactStats = [
    { metric: "2-4 hours", label: "Average time per drive" },
    { metric: "5,000+", label: "Active volunteers statewide" },
    { metric: "120+", label: "Drives conducted so far" },
    { metric: "50+ tons", label: "Waste removed annually" },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-16 min-h-screen bg-background">
        {/* Hero Section */}
        <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-off-white mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-off-white/90 leading-relaxed">
              Join Kerala&rsquo;s largest grassroots environmental movement. Make a tangible impact in your community.
            </p>
          </div>
        </SectionContainer>

        {/* Expectations */}
        <SectionContainer className="bg-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Clear expectations for a great volunteer experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <div
                key={index}
                className="bg-card-bg border border-border rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-off-white mb-3">
                  {item.title}
                </h3>
                <p className="text-soft-grey">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* Guidelines & What to Bring */}
        <SectionContainer className="bg-card-bg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-off-white mb-6">
                Safety & Guidelines
              </h2>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-cta-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-soft-grey">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-off-white mb-6">
                What to Bring
              </h2>
              <ul className="space-y-3">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-cta-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-soft-grey">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-forest-green/30 border border-cta-green/30 rounded-md">
                <p className="text-sm text-off-white/80">
                  <strong className="text-cta-green">Note:</strong> We provide all safety gear (gloves, collection bags, tools). Just bring yourself!
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Signup Form */}
        <SectionContainer className="bg-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Sign Up as Volunteer
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Fill out the form below and we&rsquo;ll get you started with upcoming drives in your area.
            </p>
          </div>
          <VolunteerSignupForm />
        </SectionContainer>

        {/* FAQ */}
        <SectionContainer className="bg-card-bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-off-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-soft-grey">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* Impact Stats */}
        <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Your Impact as a Volunteer
            </h2>
            <p className="text-lg text-off-white/90 max-w-2xl mx-auto">
              Every volunteer contributes to measurable environmental change.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cta-green mb-2">
                  {stat.metric}
                </div>
                <p className="text-soft-grey text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}
