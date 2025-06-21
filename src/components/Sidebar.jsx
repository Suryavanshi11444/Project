import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="w-64 h-screen sticky top-0 p-6 shadow-lg" 
         style={{ backgroundColor: '#4F46E5' }}>
      {/* Logo/Header */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
        <p className="text-sm mt-1" style={{ color: '#F3F4F6' }}>ClothStore Management</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        <Link
         to="/"
                   className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#4338CA]"
          style={{ color: 'white' }}
         >Back to Home</Link>
        <Link 
          to="/admin" 
          className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#4338CA]"
          style={{ color: 'white' }}
        >
          Dashboard Home
        </Link>
        <Link 
          to="/admin/orders" 
          className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#4338CA]"
          style={{ color: 'white' }}
        >
          Manage Orders
        </Link>
        <Link 
          to="/admin/products" 
          className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#4338CA]"
          style={{ color: 'white' }}
        >
          Product Catalog
        </Link>
        <Link 
          to="/admin/customers" 
          className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#4338CA]"
          style={{ color: 'white' }}
        >
          Customer Management
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-10 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <button 
          onClick={logout} 
          className="w-full px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-[#0EA5E9]"
          style={{ 
            backgroundColor: '#4338CA',
            color: 'white'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;