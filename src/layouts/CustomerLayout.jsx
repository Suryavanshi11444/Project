import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - already styled with your colors */}
      <Navbar />
      
      {/* Main Content Area */}
      <main 
        className="flex-grow p-4 md:p-8" 
        style={{ 
          backgroundColor: '#F3F4F6', // Light Gray background
          color: '#111827' // Dark Gray text
        }}
      >
        {/* Content Container */}
        <div 
          className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6"
          style={{
            minHeight: 'calc(80vh - 100px)',
            borderTop: '4px solid #4F46E5' // Indigo accent
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* Footer - already styled with your colors */}
      <Footer />
    </div>
  );
};

export default CustomerLayout;