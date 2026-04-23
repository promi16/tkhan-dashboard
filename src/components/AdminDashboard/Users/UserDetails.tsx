import React from "react";
import { motion } from "framer-motion";

interface User {
  name: string;
  id: string;
  email: string;
  phone: string;
  role: "Buyer" | "Seller";
  status: "Active" | "Blocked";
  joinDate: string;
  totalBookings: number;
}

interface UserInfoProps {
  status?: "Active" | "Blocked";
  user?: User;
}

export const UserDetails: React.FC<UserInfoProps> = ({ user, status }) => {
  const data = {
    name: user?.name || "",
    id: user?.id || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "Buyer",
    status: status || user?.status || "Active",
    joinDate: user?.joinDate || "",
    totalBookings: user?.totalBookings ?? 0,
  };

  const infoBlocks = [
    { label: "Name", value: data.name },
    { label: "User ID", value: data.id },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Role", value: data.role, type: "badge" },
    { label: "Status", value: data.status, type: "badge" },
    { label: "Join Date", value: data.joinDate },
    { label: "Total Bookings", value: data.totalBookings },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white p-6 md:p-8 rounded-[20px] border border-[#F1F5F9] shadow-sm max-w-[650px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
        {infoBlocks.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-0.5">
            <p className="text-[#94A3B8] text-[10px] md:text-[11px] uppercase tracking-wider font-medium">
              {item.label}
            </p>
            {item.type === "badge" ? (
              <div className="flex mt-0.5">
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] md:text-[11px] font-medium ${
                    item.value === "Active" || item.value === "Buyer"
                      ? "bg-[#E7F9ED] text-[#10B981]"
                      : item.value === "Blocked"
                        ? "bg-[#FEE2E2] text-[#EF4444]"
                        : "bg-[#F1F5F9] text-[#64748B]"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ) : (
              <p className="text-[#1E293B] text-[14px] md:text-[15px] lg:text-[16px] leading-tight font-normal">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
