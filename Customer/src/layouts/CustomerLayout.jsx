import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main 
        className="flex-grow p-4 md:p-8" 
        style={{ 
          backgroundColor: '#F3F4F6', 
          color: '#111827' 
        }}
      >
        <div 
          className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6"
          style={{
            minHeight: 'calc(80vh - 100px)',
            borderTop: '4px solid #4F46E5' 
          }}
        >
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerLayout;