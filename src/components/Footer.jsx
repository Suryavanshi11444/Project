const Footer = () => {
  return (
    <footer className="w-full" style={{ backgroundColor: '#4F46E5', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About ClothStore</h3>
            <p className="text-sm opacity-90" style={{ color: '#F3F4F6' }}>
              Your premier destination for quality fashion at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Contact</a></li>
              <li><a href="/faq" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">FAQs</a></li>
              <li><a href="/returns" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Returns Policy</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Shipping Info</a></li>
              <li><a href="/privacy" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l text-sm w-full" 
                style={{ color: '#111827' }}
              />
              <button 
                className="px-4 py-2 rounded-r text-sm font-medium transition-colors duration-200"
                style={{ backgroundColor: '#0EA5E9' }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 opacity-80" style={{ color: '#F3F4F6' }}>
              Get 10% off your first order
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-sm" style={{ color: '#F3F4F6' }}>
            © 2025 ClothStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;