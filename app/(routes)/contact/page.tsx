import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionContainer from "@/app/components/SectionContainer";
import ContactForm from "@/app/components/forms/ContactForm";

export const metadata = {
  title: "Contact - Green Kerala Volunteers",
  description: "Get in touch with Green Kerala Volunteers. Reach out for partnerships, inquiries, or volunteer coordination.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "contact@greenkeralavolunteers.org",
      link: "mailto:contact@greenkeralavolunteers.org",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: "WhatsApp",
      value: "+91 9876543210",
      link: "https://wa.me/919876543210",
    },
  ];

  const districtCoordinators = [
    { district: "Thiruvananthapuram", coordinator: "Rahul Krishnan", contact: "+91 98765 43211" },
    { district: "Kollam", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Pathanamthitta", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Alappuzha", coordinator: "Meera Suresh", contact: "+91 98765 43212" },
    { district: "Kottayam", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Idukki", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Ernakulam", coordinator: "Priya Menon", contact: "+91 98765 43213" },
    { district: "Thrissur", coordinator: "Deepa Nair", contact: "+91 98765 43214" },
    { district: "Palakkad", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Malappuram", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Kozhikode", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Wayanad", coordinator: "Arun Kumar", contact: "+91 98765 43215" },
    { district: "Kannur", coordinator: "[Placeholder]", contact: "TBA" },
    { district: "Kasaragod", coordinator: "[Placeholder]", contact: "TBA" },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-16 min-h-screen bg-background">
        {/* Hero Section */}
        <SectionContainer className="bg-gradient-to-br from-forest-green to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-off-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-off-white/90 leading-relaxed">
              Have questions? Want to partner with us? We&rsquo;d love to hear from you.
            </p>
          </div>
        </SectionContainer>

        {/* Contact Methods */}
        <SectionContainer className="bg-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Reach out through any of these channels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-card-bg border border-border rounded-lg p-6 hover:border-cta-green transition-colors text-center group"
              >
                <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-cta-green mx-auto mb-4 group-hover:bg-cta-green group-hover:text-background transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-off-white mb-2">
                  {method.title}
                </h3>
                <p className="text-soft-grey text-sm break-words">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </SectionContainer>

        {/* Contact Form */}
        <SectionContainer className="bg-card-bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Fill out the form and we&rsquo;ll get back to you within 48 hours.
            </p>
          </div>
          <ContactForm />
        </SectionContainer>

        {/* District Coordinators */}
        <SectionContainer className="bg-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              District Coordinators
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Reach out to your local coordinator for district-specific initiatives.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-forest-green">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-off-white">
                        District
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-off-white">
                        Coordinator
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-off-white">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {districtCoordinators.map((item, index) => (
                      <tr key={index} className="hover:bg-background transition-colors">
                        <td className="px-6 py-4 text-sm text-off-white">
                          {item.district}
                        </td>
                        <td className="px-6 py-4 text-sm text-soft-grey">
                          {item.coordinator}
                        </td>
                        <td className="px-6 py-4 text-sm text-soft-grey/70">
                          {item.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-sm text-soft-grey/60 mt-4">
              Coordinator information is updated regularly. Some positions may be vacant.
            </p>
          </div>
        </SectionContainer>

        {/* Office Location */}
        <SectionContainer className="bg-card-bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              Office Location
            </h2>
            <p className="text-lg text-soft-grey max-w-2xl mx-auto">
              Visit our coordination office in Kochi.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <svg className="w-6 h-6 text-cta-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-off-white mb-2">
                    Green Kerala Volunteers HQ
                  </h3>
                  <p className="text-soft-grey">
                    [Placeholder Address]<br />
                    MG Road, Ernakulam<br />
                    Kochi, Kerala 682035
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-card-bg rounded-lg flex items-center justify-center border border-border">
                <p className="text-soft-grey/50 text-sm">
                  [PLACEHOLDER: Google Maps Embed]
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}
