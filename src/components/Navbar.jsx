import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserShield, FaChevronDown, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const customerDropdownRef = useRef(null);
  const adminDropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (customerDropdownRef.current && !customerDropdownRef.current.contains(event.target)) {
        setShowCustomerDropdown(false);
      }
      if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
        setShowAdminDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleAdminDropdown = (e) => {
    e.stopPropagation();
    setShowAdminDropdown(!showAdminDropdown);
    setShowCustomerDropdown(false);
  };

  const toggleCustomerDropdown = (e) => {
    e.stopPropagation();
    setShowCustomerDropdown(!showCustomerDropdown);
    setShowAdminDropdown(false);
  };

  return (
    <nav className="text-white p-4 flex justify-between items-center shadow-md" style={{ backgroundColor: '#4F46E5' }}>
      <div className="font-bold text-xl">
        <Link to="/" className="hover:text-[#0EA5E9] transition-colors duration-200 flex items-center">
          <FaShoppingCart className="mr-2" />
          GlowCart
        </Link>
      </div>
      
      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium">
          Home
        </Link>
        <Link to="/productlist" className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium">
          Products
        </Link>
        <Link to="/cart" className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium">
          Cart
        </Link>
        
        <div className="relative" ref={adminDropdownRef}>
          <button 
            className="flex items-center hover:text-[#0EA5E9] transition-colors duration-200 font-medium"
            onClick={toggleAdminDropdown}
          >
            <FaUserShield className="mr-1" />
            Admin
            <FaChevronDown className="ml-1 text-xs" />
          </button>
          
          {showAdminDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <Link 
                  to="/admin/login" 
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  onClick={() => setShowAdminDropdown(false)}
                >
                  Admin Login
                </Link>
                <Link 
                  to="/admin/signup" 
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  onClick={() => setShowAdminDropdown(false)}
                >
                  Admin Signup
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={customerDropdownRef}>
          <button 
            className="flex items-center bg-[#0EA5E9] hover:bg-[#0c94d1] px-4 py-2 rounded-md font-medium"
            onClick={toggleCustomerDropdown}
          >
            <FaUser className="mr-2" />
            Customer
            <FaChevronDown className="ml-1 text-xs" />
          </button>
          
          {showCustomerDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <Link 
                  to="/customer/login" 
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  onClick={() => setShowCustomerDropdown(false)}
                >
                  Customer Login
                </Link>
                <Link 
                  to="/customer/signup" 
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  onClick={() => setShowCustomerDropdown(false)}
                >
                  Customer Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;