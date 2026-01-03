import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionContainer from "@/app/components/SectionContainer";
import CtaButton from "@/app/components/CtaButton";

export const metadata = {
  title: "About Us - Green Kerala Volunteers",
  description: "Learn about Green Kerala Volunteers, our grassroots origins, core values, and mission to protect Kerala's environment.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: "🌱",
      title: "Grassroots First",
      description: "We believe in community-led action. Every initiative starts from the ground up, driven by local volunteers who know their environment best.",
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "Open data, open operations. We share our impact metrics, partnerships, and challenges publicly to maintain accountability.",
    },
    {
      icon: "🎯",
      title: "Action-Oriented",
      description: "Less talk, more action. We focus on tangible environmental outcomes—cleanups, plantations, education—not just awareness campaigns.",
    },
    {
      icon: "🌍",
      title: "Climate Resilience",
      description: "Kerala faces unique climate challenges. We work toward building community resilience through sustainable practices and education.",
    },
    {
      icon: "💚",
      title: "Inclusive Movement",
      description: "Environmental work is for everyone. We welcome volunteers from all backgrounds, ages, and districts across Kerala.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-16 min-h-screen bg-background">
        {/* Hero Section */}
        <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-off-white mb-6">
              About Green Kerala Volunteers
            </h1>
            <p className="text-xl text-off-white/90 leading-relaxed">
              A grassroots environmental movement protecting Kerala&rsquo;s natural heritage through volunteer-driven action.
            </p>
          </div>
        </SectionContainer>

        {/* Origin Story */}
        <SectionContainer className="bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-off-white mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-soft-grey text-lg leading-relaxed">
              <p>
                Green Kerala Volunteers began in 2020 when a small group of environmental enthusiasts in Kochi organized a beach cleanup that drew unexpected crowds. What started as a one-day event grew into a statewide movement.
              </p>
              <p>
                We recognized that Kerala—despite its natural beauty—faced mounting environmental pressures: plastic-choked rivers, deforestation, coastal erosion, and climate vulnerability. Rather than waiting for top-down solutions, we decided to mobilize communities for immediate, local action.
              </p>
              <p>
                Today, we&rsquo;ve grown into a network of over 5,000 volunteers across all 14 districts, conducting regular cleanups, tree plantations, waste management workshops, and climate education programs. But we remain fiercely grassroots—volunteer-led, community-focused, and Kerala-first.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Core Values */}
        <SectionContainer className="bg-card-bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              The principles that guide every initiative and decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:border-cta-green transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-off-white mb-3">
                  {value.title}
                </h3>
                <p className="text-soft-grey">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* Transparency Note */}
        <SectionContainer className="bg-background">
          <div className="max-w-4xl mx-auto bg-card-bg border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-off-white mb-4">
              Transparency & Accountability
            </h2>
            <div className="space-y-3 text-off-white/80">
              <p>
                We operate with full transparency. All our impact data—cleanup metrics, plantation numbers, volunteer counts—is tracked and shared publicly.
              </p>
              <p>
                We don&rsquo;t accept corporate donations that conflict with our environmental mission. Partnerships are vetted for alignment with our values.
              </p>
              <p>
                Our operations are run by volunteer coordinators across districts. We have no paid executives—every rupee goes toward drives, materials, and community programs.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Team Section */}
        <SectionContainer className="bg-card-bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Our Team
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Green Kerala Volunteers is coordinated by dedicated volunteers across all 14 districts.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <p className="text-soft-grey mb-4">
                [PLACEHOLDER: District Coordinators Grid]
              </p>
              <p className="text-sm text-soft-grey/60">
                District-wise coordinator information with names, roles, and contact details will be displayed here.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-off-white mb-6">
              Join Our Movement
            </h2>
            <p className="text-lg text-off-white/90 mb-8">
              Whether you can commit 2 hours a month or want to become a district lead, there&rsquo;s a place for you in our volunteer network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtaButton href="/volunteer" variant="primary" className="text-lg">
                Start Volunteering
              </CtaButton>
              <CtaButton href="/initiatives" variant="secondary" className="text-lg">
                View Our Initiatives
              </CtaButton>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}
