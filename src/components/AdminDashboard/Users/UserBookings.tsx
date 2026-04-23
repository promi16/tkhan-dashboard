import React from "react";
import { motion } from "framer-motion";

interface UserBookingsProps {
  user?: {
    name: string;
    // Baki proyojoniyo fields ekhane thakbe
  };
}

export const UserBookings: React.FC<UserBookingsProps> = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-sm max-w-[1000px]"
    >
      {/* Header section with Ongoing badge */}
      <div className="flex justify-end mb-6">
        <span className="bg-[#10B981] text-white text-[10px] md:text-xs font-medium px-4 py-1 rounded-lg uppercase tracking-wide">
          Ongoing
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Total Package and Service Info */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#FF6B35] p-8 rounded-2xl text-white shadow-lg shadow-orange-100"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">$</span>
              <p className="text-[10px] font-medium opacity-90 uppercase tracking-widest">
                Total Package
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              $173
            </h2>
          </motion.div>

          <div className="space-y-4">
            <h4 className="font-medium text-[#1E293B] text-[11px] uppercase tracking-widest">
              Service Information
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-xs text-[#64748B] font-normal">Service</p>
                <p className="text-sm font-medium text-[#FF6B35]">$120</p>
              </div>
              <p className="text-sm font-medium text-[#1E293B] -mt-2">
                Premium Service Package
              </p>

              <div className="bg-[#FFF7F4] p-4 rounded-xl border border-[#FFEDE8] space-y-1">
                <div className="flex items-center gap-2 text-[#FF6B35]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <p className="text-[10px] font-medium uppercase tracking-wider">
                    Date & Time
                  </p>
                </div>
                <p className="text-sm font-medium text-[#1E293B]">
                  Apr 13, 2026
                </p>
                <p className="text-sm font-medium text-[#FF6B35]">10:00 AM</p>
              </div>

              <div>
                <p className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-widest">
                  Duration
                </p>
                <p className="text-sm font-medium text-[#1E293B]">2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Add-Ons and Location */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h4 className="font-medium text-[#1E293B] text-[11px] uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="text-[#FF6B35]">✦</span> Add-Ons Selected
            </h4>
            <div className="space-y-5">
              {[
                { n: "De-shedding Treatment", p: 25, d: "20 mins" },
                { n: "Nail Grinding", p: 10, d: "10 mins" },
                { n: "Ear Deep Clean", p: 18, d: "15 mins" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="border-b border-gray-100 pb-3 flex justify-between items-start"
                >
                  <div>
                    <p className="text-sm font-medium text-[#1E293B]">{a.n}</p>
                    <p className="text-[11px] text-[#94A3B8] font-normal">
                      {a.d}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-[#FF6B35]">
                    ${a.p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-[#1E293B] text-[11px] uppercase tracking-widest">
              Service Location
            </h4>
            <div className="bg-[#F8FAFC] p-3 px-4 rounded-xl border border-gray-100 inline-flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="text-sm font-medium text-[#FF6B35]">
                At-home Groom
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-widest flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Complete Address
              </p>
              <p className="text-sm font-medium text-[#1E293B] max-w-[250px] leading-relaxed">
                123 Main Street, Apt 4B, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Seller Profile Card (Dynamic Seller Info) */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-2xl text-center border border-[#FFEDE8] shadow-sm">
            <p className="text-[11px] text-[#94A3B8] font-medium uppercase tracking-widest mb-4">
              Seller
            </p>
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
                className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover shadow-sm"
                alt="seller"
              />
            </div>
            {/* Dynamic Seller Name */}
            <h3 className="font-medium text-[#1E293B] text-base mb-6 tracking-tight">
              {user?.name || "Sarah Jenkins"}
            </h3>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-[#FF6B35] text-white rounded-xl font-medium text-[10px] uppercase tracking-[0.15em] transition-all"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
