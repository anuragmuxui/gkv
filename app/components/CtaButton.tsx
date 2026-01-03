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
    primary: "bg-[#5fa86a] text-[#1a1a1a] hover:bg-[#4d9558] hover:shadow-lg hover:scale-105",
    secondary: "bg-[#2a2a2a] text-[#f5f5f1] border border-[#3a3a3a] hover:bg-[#3a3a3a] hover:border-[#5fa86a]",
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
