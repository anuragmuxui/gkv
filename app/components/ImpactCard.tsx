interface ImpactCardProps {
  title: string;
  frequency: string;
  location: string;
  icon: string;
}

export default function ImpactCard({ title, frequency, location, icon }: ImpactCardProps) {
  return (
    <div className="bg-card-bg border border-border rounded-lg p-6 hover:border-cta-green transition-all duration-300 hover:shadow-lg hover:shadow-cta-green/10">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-off-white mb-2">
            {title}
          </h3>
          <div className="space-y-1 text-sm text-soft-grey">
            <p className="flex items-center">
              <span className="font-medium text-cta-green mr-2">Frequency:</span>
              {frequency}
            </p>
            <p className="flex items-center">
              <span className="font-medium text-cta-green mr-2">Location:</span>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
