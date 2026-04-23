import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Specific interface for the data points
interface ChartDataPoint {
  name: string;
  bookings: number;
  revenue: number;
}

interface ChartProps {
  // any[] er bodole amra specific object array use korchi
  data: ChartDataPoint[];
}

export const ChartsSection: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Bookings Chart */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-[400px]">
        <h3 className="font-bold text-lg mb-6">
          Bookings Trend{" "}
          <span className="text-sm font-medium text-gray-400 block">
            Last 7 days
          </span>
        </h3>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#FF6B35"
              strokeWidth={3}
              fill="url(#colorB)"
              fillOpacity={0.1}
            />
            <defs>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-[400px]">
        <h3 className="font-bold text-lg mb-6">
          Revenue Trend{" "}
          <span className="text-sm font-medium text-gray-400 block">
            Last 7 days
          </span>
        </h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <Tooltip
              cursor={{ fill: "#f9fafb" }}
              contentStyle={{ borderRadius: "16px", border: "none" }}
            />
            <Bar
              dataKey="revenue"
              fill="#FF6B35"
              radius={[8, 8, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
