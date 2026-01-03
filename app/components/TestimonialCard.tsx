interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  role?: string;
}

export default function TestimonialCard({ quote, name, city, role }: TestimonialCardProps) {
  return (
    <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6">
      <blockquote>
        <p className="text-[#f5f5f1] italic mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="text-sm">
          <cite className="not-italic">
            <span className="font-semibold text-[#5fa86a]">{name}</span>
            <span className="text-[#f5f5f1]/70"> &mdash; {city}</span>
            {role && <span className="text-[#f5f5f1]/60 block mt-1">{role}</span>}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}
