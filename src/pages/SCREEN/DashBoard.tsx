import { useState } from "react";
import { Menu, Car, User, LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navigate = useNavigate();
  
const handlelogOut = () => {
  localStorage.removeItem("token")

  navigate("/auth/login");
  closeSidebar();
}
  return (
    <div className="min-h-screen flex bg-[#1A1A1A] text-white relative">
      {/* Sidebar for desktop */}
      <div className="w-64 bg-blue-600 p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">CarHub</h2>
        <nav className="space-y-4">
          <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full">
            <Car />
            <span>Cars</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full">
            <User />
            <span>Users</span>
          </button>
          <button
  onClick={handlelogOut}
  className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full"
>
  <LogOut />
  <span>Logout</span>
</button>

        </nav>
      </div>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={closeSidebar}>
          <div
            className="w-64 bg-blue-600 p-4 h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing on sidebar click
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">CarHub</h2>
              <X className="cursor-pointer" onClick={closeSidebar} />
            </div>
            <nav className="space-y-4">
              <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full">
                <Car />
                <span>Cars</span>
              </button>
              <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full">
                <User />
                <span>Users</span>
              </button>
              <button
  onClick={handlelogOut}
  className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full"
>
  <LogOut />
  <span>Logout</span>
</button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex justify-between items-center p-4 bg-blue-600">
          <h2 className="text-xl font-bold">CarHub</h2>
          <Menu className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Content Area */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-600 p-4 rounded-xl shadow-lg">Total Cars: 20</div>
            <div className="bg-blue-600 p-4 rounded-xl shadow-lg">Total Users: 50</div>
            <div className="bg-blue-600 p-4 rounded-xl shadow-lg">Total Rentals: 15</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
