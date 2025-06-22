import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white p-4 flex justify-between items-center shadow-md" 
         style={{ backgroundColor: '#4F46E5' }}>
      <div className="font-bold text-xl">
        <Link to="/" className="hover:text-[#0EA5E9] transition-colors duration-200">
          GlowCart
        </Link>
      </div>
      
      <div className="flex space-x-6 items-center">
        <Link 
          to="/" 
          className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link 
          to="/products" 
          className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium"
        >
          Products
        </Link>
        <Link 
          to="/cart" 
          className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium"
        >
          Cart
        </Link>
        <Link 
          to="/login" 
          className="hover:text-[#0EA5E9] transition-colors duration-200 font-medium"
        >
          Admin
        </Link>
        <Link 
          to="/customer-login" 
          className="bg-[#0EA5E9] hover:bg-[#0c94d1] px-4 py-2 rounded-md font-medium transition-colors duration-200"
        >
          Customer Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;