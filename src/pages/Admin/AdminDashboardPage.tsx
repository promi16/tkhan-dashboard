import React from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, Calendar, DollarSign } from "lucide-react";
import "../../index.css";
import { StatsCard } from "@/components/AdminDashboard/Dashboard/StatsCard";
import { ChartsSection } from "@/components/AdminDashboard/Dashboard/ChartsSection";
import { RecentUsers } from "@/components/AdminDashboard/Dashboard/RecentUsers";

// Components folder theke choto choto parts gulo import kora holo

// Dynamic Data Logic (Optional: eita ekta separate data file eo rakhte paren)
const chartData = Array.from({ length: 7 }).map((_, i) => ({
  name: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" },
  ),
  bookings: Math.floor(Math.random() * 50) + 20,
  revenue: Math.floor(Math.random() * 5000) + 8000,
}));

const AdminDashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value="2,847"
          icon={Users}
          color="orange"
        />
        <StatsCard
          title="Active Sellers"
          value="1,243"
          icon={UserCheck}
          color="blue"
        />
        <StatsCard
          title="Today's Bookings"
          value="47"
          icon={Calendar}
          color="orange"
        />
        <StatsCard
          title="Today's Revenue"
          value="$12,450"
          icon={DollarSign}
          color="green"
        />
      </div>

      {/* Graphs/Charts Section */}
      <ChartsSection data={chartData} />

      {/* Recent User Registrations */}
      <div className="mt-8">
        <RecentUsers />
      </div>
    </motion.div>
  );
};

export default AdminDashboardPage;
