import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserShield, FaChevronDown, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <nav className="text-white p-4 shadow-md" style={{ backgroundColor: '#4F46E5' }}>
      <div className="flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center text-xl font-bold hover:text-[#0EA5E9]">
          <FaShoppingCart className="mr-2" />
          GlowCart
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#0EA5E9] font-medium">Home</Link>
          <Link to="/productlist" className="hover:text-[#0EA5E9] font-medium">Products</Link>
          <Link to="/cart" className="hover:text-[#0EA5E9] font-medium">Cart</Link>

          {/* Admin Dropdown */}
          <div className="relative" ref={adminDropdownRef}>
            <button onClick={toggleAdminDropdown} className="flex items-center hover:text-[#0EA5E9] font-medium">
              <FaUserShield className="mr-1" /> Admin <FaChevronDown className="ml-1 text-xs" />
            </button>
            {showAdminDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link to="/admin/login" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100" onClick={() => setShowAdminDropdown(false)}>Admin Login</Link>
                <Link to="/admin/signup" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100" onClick={() => setShowAdminDropdown(false)}>Admin Signup</Link>
              </div>
            )}
          </div>

          {/* Customer Dropdown */}
          <div className="relative" ref={customerDropdownRef}>
            <button onClick={toggleCustomerDropdown} className="flex items-center bg-[#0EA5E9] hover:bg-[#0c94d1] px-4 py-2 rounded-md font-medium">
              <FaUser className="mr-2" /> Customer <FaChevronDown className="ml-1 text-xs" />
            </button>
            {showCustomerDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link to="/customer/login" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100" onClick={() => setShowCustomerDropdown(false)}>Customer Login</Link>
                <Link to="/customer/signup" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100" onClick={() => setShowCustomerDropdown(false)}>Customer Signup</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-3">
          <Link to="/" className="hover:text-[#0EA5E9] font-medium">Home</Link>
          <Link to="/productlist" className="hover:text-[#0EA5E9] font-medium">Products</Link>
          <Link to="/cart" className="hover:text-[#0EA5E9] font-medium">Cart</Link>

          {/* Admin Dropdown */}
          <div className="border-t border-white pt-2">
            <p className="text-sm font-semibold mb-1 flex items-center"><FaUserShield className="mr-2" /> Admin</p>
            <Link to="/admin/login" className="ml-4 text-sm hover:text-[#0EA5E9]">Login</Link>
            <Link to="/admin/signup" className="ml-4 text-sm hover:text-[#0EA5E9]">Signup</Link>
          </div>

          {/* Customer Dropdown */}
          <div className="border-t border-white pt-2">
            <p className="text-sm font-semibold mb-1 flex items-center"><FaUser className="mr-2" /> Customer</p>
            <Link to="/customer/login" className="ml-4 text-sm hover:text-[#0EA5E9]">Login</Link>
            <Link to="/customer/signup" className="ml-4 text-sm hover:text-[#0EA5E9]">Signup</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
