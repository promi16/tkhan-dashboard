import React from "react";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: "orange" | "blue" | "green";
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  const colorMap = {
    orange: "bg-orange-50 text-orange-500",
    blue: "bg-blue-50 text-blue-500",
    green: "bg-green-50 text-green-500",
  };

  return (
    <div className="bg-white p-6 rounded-[24px] border border-gray-100 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-gray-500 text-sm font-semibold mb-1">{title}</p>
        <h3 className="text-2xl font-black text-[#0f2f1d]">{value}</h3>
      </div>
      <div className={`p-4 rounded-2xl ${colorMap[color]}`}>
        <Icon size={24} />
      </div>
    </div>
  );
};
