import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <main className="bg-[#E6F2EA] text-black">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
