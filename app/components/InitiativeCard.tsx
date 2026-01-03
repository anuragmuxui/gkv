import CtaButton from "./CtaButton";

interface InitiativeCardProps {
  name: string;
  location: string;
  date: string;
  description?: string;
}

export default function InitiativeCard({ name, location, date, description }: InitiativeCardProps) {
  return (
    <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 hover:border-[#5fa86a] transition-colors">
      <h3 className="text-xl font-semibold text-[#f5f5f1] mb-2">{name}</h3>
      <div className="space-y-1 mb-4 text-[#f5f5f1]/70">
        <p className="flex items-center text-sm">
          <svg className="w-4 h-4 mr-2 text-[#5fa86a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        <p className="flex items-center text-sm">
          <svg className="w-4 h-4 mr-2 text-[#5fa86a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {date}
        </p>
      </div>
      {description && (
        <p className="text-sm text-[#f5f5f1]/80 mb-4">{description}</p>
      )}
      <CtaButton href="/volunteer" variant="primary" className="w-full sm:w-auto">
        Join this drive
      </CtaButton>
    </div>
  );
}
