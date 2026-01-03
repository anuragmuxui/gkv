interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  role?: string;
}

export default function TestimonialCard({ quote, name, city, role }: TestimonialCardProps) {
  return (
    <div className="bg-card-bg border border-border rounded-lg p-6">
      <blockquote>
        <p className="text-off-white italic mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="text-sm">
          <cite className="not-italic">
            <span className="font-semibold text-cta-green">{name}</span>
            <span className="text-soft-grey"> &mdash; {city}</span>
            {role && <span className="text-soft-grey/80 block mt-1">{role}</span>}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}
