import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react"; // Ban icon remove kora hoyeche
import { UserTable } from "@/components/AdminDashboard/Users/UserTable";
import { UserDetails } from "@/components/AdminDashboard/Users/UserDetails";
import { UserBookings } from "@/components/AdminDashboard/Users/UserBookings";
import { UserFeedback } from "@/components/AdminDashboard/Users/UserFeedback";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Details");

  // User list dynamic data
  const users = [
    {
      id: "U001",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 234 567 8901",
      role: "Buyer" as const,
      status: "Active" as const,
      joinDate: "2024-01-15",
      totalBookings: 12,
    },
    {
      id: "U002",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8902",
      role: "Seller" as const,
      status: "Active" as const,
      joinDate: "2024-02-20",
      totalBookings: 8,
    },
    {
      id: "U003",
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "+1 234 567 8903",
      role: "Buyer" as const,
      status: "Active" as const,
      joinDate: "2024-03-10",
      totalBookings: 15,
    },
    {
      id: "U004",
      name: "Emily Brown",
      email: "emily.b@email.com",
      phone: "+1 234 567 8904",
      role: "Seller" as const,
      status: "Active" as const,
      joinDate: "2024-01-25",
      totalBookings: 5,
    },
    {
      id: "U005",
      name: "David Wilson",
      email: "david.w@email.com",
      phone: "+1 234 567 8905",
      role: "Buyer" as const,
      status: "Blocked" as const,
      joinDate: "2024-04-05",
      totalBookings: 0,
    },
    {
      id: "U006",
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      phone: "+1 234 567 8906",
      role: "Seller" as const,
      status: "Active" as const,
      joinDate: "2024-02-14",
      totalBookings: 22,
    },
    {
      id: "U007",
      name: "James Taylor",
      email: "james.t@email.com",
      phone: "+1 234 567 8907",
      role: "Buyer" as const,
      status: "Active" as const,
      joinDate: "2024-03-22",
      totalBookings: 10,
    },
    {
      id: "U008",
      name: "Maria Garcia",
      email: "maria.g@email.com",
      phone: "+1 234 567 8908",
      role: "Seller" as const,
      status: "Active" as const,
      joinDate: "2024-01-30",
      totalBookings: 14,
    },
  ];

  const selectedUserData = useMemo(() => {
    return users.find((u) => u.id === selectedUser);
  }, [selectedUser]);

  const tabs = ["User Details", "Bookings", "User Feedback"];

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!selectedUser ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8">
              <h1 className="text-2xl font-black text-[#0f2f1d]">
                User Management
              </h1>
              <p className="text-gray-400 font-medium">
                Manage all platform users
              </p>
            </div>
            <UserTable onViewDetails={(id) => setSelectedUser(id)} />
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
          >
            {/* Back Button Section */}
            <button
              onClick={() => {
                setSelectedUser(null);
                setActiveTab("Details");
              }}
              className="mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 cursor-pointer active:scale-90"
            >
              <ArrowLeft size={28} />
            </button>

            {/* Sub-Header Tabs - (Block User Button Removed) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 mb-10 gap-4">
              <div className="flex gap-8 lg:gap-12 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                  const tabKey = tab.split(" ").pop()!;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tabKey)}
                      className={`pb-4 font-bold text-sm lg:text-base whitespace-nowrap relative transition-colors cursor-pointer ${
                        activeTab === tabKey
                          ? "text-[#FF6B35]"
                          : "text-gray-400 hover:text-[#1E293B]"
                      }`}
                    >
                      {tab}
                      {activeTab === tabKey && (
                        <motion.div
                          layoutId="tabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B35] rounded-t-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* Button section removed entirely */}
            </div>

            {/* Dynamic Tab Content with Animations */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {activeTab === "Details" && (
                    <UserDetails user={selectedUserData} />
                  )}
                  {activeTab === "Bookings" && (
                    <UserBookings user={selectedUserData} />
                  )}
                  {activeTab === "Feedback" && <UserFeedback />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UsersPage;
