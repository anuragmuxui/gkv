import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CtaButton({ href, children, variant = "primary", className = "" }: CtaButtonProps) {
  const baseStyles = "inline-block px-6 py-3 rounded-md font-medium transition-all duration-200 text-center";
  
  const variantStyles = {
    primary: "bg-cta-green text-background hover:brightness-110 hover:shadow-lg hover:scale-105",
    secondary: "bg-card-bg text-off-white border border-border hover:bg-border hover:border-cta-green",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
