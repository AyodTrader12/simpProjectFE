import React from "react";
import { Menu, Car, User, LogOut } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#1A1A1A] text-white">
      {/* Sidebar */}
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
          <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded w-full">
            <LogOut />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex justify-between items-center p-4 bg-blue-600">
          <h2 className="text-xl font-bold">CarHub</h2>
          <Menu />
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
