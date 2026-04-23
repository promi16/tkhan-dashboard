import React from "react";

const users = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    date: "Joined 2024-01-15",
    role: "Buyer",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    date: "Joined 2024-02-20",
    role: "Seller",
  },
];

export const RecentUsers: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
      <h3 className="font-bold text-lg mb-6">Recent User Registrations</h3>
      <div className="space-y-6">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
          >
            <div className="flex flex-col">
              <span className="font-bold text-[#0f2f1d]">{user.name}</span>
              <span className="text-xs text-gray-400 font-medium">
                {user.email}
              </span>
              <span className="text-[10px] text-gray-400">{user.date}</span>
            </div>
            <span
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold ${user.role === "Buyer" ? "bg-gray-100 text-gray-600" : "bg-[#E3E8FE] text-[#1E3A8A]"}`}
            >
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
