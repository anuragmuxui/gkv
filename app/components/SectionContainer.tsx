interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-12 px-4 sm:px-6 lg:py-20 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
