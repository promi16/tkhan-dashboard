import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, UserX } from "lucide-react";
// import "../../index.css";

export const UserTable = ({
  onViewDetails,
}: {
  onViewDetails: (id: string) => void;
}) => {
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");
  const [roleOpen, setRoleOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const users = [
    {
      id: "U001",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 234 567 8901",
      role: "Buyer",
      status: "Active",
      date: "2024-01-15",
    },
    {
      id: "U002",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8902",
      role: "Seller",
      status: "Active",
      date: "2024-02-20",
    },
    {
      id: "U003",
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "+1 234 567 8903",
      role: "Buyer",
      status: "Active",
      date: "2024-03-10",
    },
    {
      id: "U004",
      name: "Emily Brown",
      email: "emily.b@email.com",
      phone: "+1 234 567 8904",
      role: "Seller",
      status: "Active",
      date: "2024-01-25",
    },
    {
      id: "U005",
      name: "David Wilson",
      email: "david.w@email.com",
      phone: "+1 234 567 8905",
      role: "Buyer",
      status: "Blocked",
      date: "2024-04-05",
    },
    {
      id: "U006",
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      phone: "+1 234 567 8906",
      role: "Seller",
      status: "Active",
      date: "2024-02-14",
    },
    {
      id: "U007",
      name: "James Taylor",
      email: "james.t@email.com",
      phone: "+1 234 567 8907",
      role: "Buyer",
      status: "Active",
      date: "2024-03-22",
    },
    {
      id: "U008",
      name: "Maria Garcia",
      email: "maria.g@email.com",
      phone: "+1 234 567 8908",
      role: "Seller",
      status: "Active",
      date: "2024-01-30",
    },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesRole = roleFilter === "All Roles" || u.role === roleFilter;
      const matchesStatus =
        statusFilter === "All Status" || u.status === statusFilter;
      const matchesSearch =
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesStatus && matchesSearch;
    });
  }, [roleFilter, statusFilter, searchQuery]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden w-full transition-all duration-300">
      <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 h-12 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-[#FF6B35] focus:bg-white transition-all"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          {[
            {
              label: roleFilter,
              set: setRoleFilter,
              open: roleOpen,
              toggle: setRoleOpen,
              opts: ["All Roles", "Buyer", "Seller"],
            },
            {
              label: statusFilter,
              set: setStatusFilter,
              open: statusOpen,
              toggle: setStatusOpen,
              opts: ["All Status", "Active", "Blocked"],
            },
          ].map((drop, i) => (
            <div key={i} className="relative flex-1 md:flex-none">
              <button
                onClick={() => drop.toggle(!drop.open)}
                className="cursor-pointer w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-sm text-slate-600 hover:border-[#FF6B35] transition-all"
              >
                {drop.label}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${drop.open ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {drop.open && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[56px] right-0 w-full md:w-[160px] bg-white shadow-2xl rounded-xl p-2 z-50 border border-slate-100"
                  >
                    {drop.opts.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          drop.set(opt);
                          drop.toggle(false);
                        }}
                        className={`cursor-pointer w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                          drop.label === opt
                            ? "bg-[#FF6B35] text-white font-bold"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50">
            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
              <th className="py-5 px-6">Name</th>
              <th className="py-5 px-6 hidden sm:table-cell">Contact</th>
              <th className="py-5 px-6">Role</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-5 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <motion.tr
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={u.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#FF6B35] transition-colors">
                        {u.name}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-black">
                        {u.id}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden sm:table-cell">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-600">{u.email}</span>
                      <span className="text-[11px] text-slate-400">
                        {u.phone}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${u.role === "Buyer" ? "bg-slate-100 text-slate-500" : "bg-blue-50 text-blue-500"}`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${u.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onViewDetails(u.id)}
                      className="cursor-pointer px-4 py-2 rounded-lg text-xs font-black text-slate-700 border border-slate-200 hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-white hover:shadow-sm transition-all active:scale-95"
                    >
                      View Details
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <div className="flex flex-col items-center gap-3 grayscale opacity-60">
                    <UserX size={48} />
                    <p className="text-lg font-bold text-slate-800">
                      No Match Found
                    </p>
                    <p className="text-sm text-slate-400">
                      We couldn't find any user matching your search.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
