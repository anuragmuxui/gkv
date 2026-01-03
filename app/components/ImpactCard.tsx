interface ImpactCardProps {
  title: string;
  frequency: string;
  location: string;
  icon: string;
}

export default function ImpactCard({ title, frequency, location, icon }: ImpactCardProps) {
  return (
    <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 hover:border-[#5fa86a] transition-all duration-300 hover:shadow-lg hover:shadow-[#5fa86a]/10">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#f5f5f1] mb-2">
            {title}
          </h3>
          <div className="space-y-1 text-sm text-[#f5f5f1]/70">
            <p className="flex items-center">
              <span className="font-medium text-[#5fa86a] mr-2">Frequency:</span>
              {frequency}
            </p>
            <p className="flex items-center">
              <span className="font-medium text-[#5fa86a] mr-2">Location:</span>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
