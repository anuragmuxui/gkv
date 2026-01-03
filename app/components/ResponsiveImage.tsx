interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ResponsiveImage({ alt, className = "" }: ResponsiveImageProps) {
  return (
    <div className={`relative bg-[#2a2a2a] rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video w-full flex items-center justify-center text-[#f5f5f1]/50 text-sm p-8 text-center">
        <span>[REAL PHOTO: {alt}]</span>
      </div>
    </div>
  );
}
