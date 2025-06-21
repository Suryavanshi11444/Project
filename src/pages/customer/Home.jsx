import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  // Sample featured products data with real image links
  const featuredProducts = [
    {
      id: 1,
      title: "Premium Cotton T-Shirt",
      price: 29.99,
      category: "Men's Clothing",
      thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Elegant Summer Dress",
      price: 49.99,
      category: "Women's Clothing",
      thumbnail: "https://images.unsplash.com/photo-1539008835657-9e8e9680e956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Classic Denim Jeans",
      price: 59.99,
      category: "Men's Clothing",
      thumbnail: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Stylish Sneakers",
      price: 79.99,
      category: "Footwear",
      thumbnail: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="pb-16">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundColor: '#F3F4F6' // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl mb-8 text-white">
            Quality clothing for every occasion at unbeatable prices
          </p>
          <Link 
            to="/products"
            className="inline-block px-8 py-3 rounded-md font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white',
              ':hover': {
                backgroundColor: '#4338CA'
              }
            }}
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#111827' }}>
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Men', image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'Women', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'Kids', image: 'https://images.unsplash.com/photo-1604917018610-384c8ed8b3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
            { name: 'Accessories', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
          ].map((category) => (
            <Link 
              key={category.name}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#111827' }}>
            Featured Products
          </h2>
          <Link 
            to="/products"
            className="px-6 py-2 rounded-md font-medium hover:bg-[#4338CA] transition-colors duration-200"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white'
            }}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>
          Join Our Newsletter
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
          Subscribe to get 10% off your first order and updates on new arrivals
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            style={{ color: '#111827' }}
          />
          <button 
            className="px-6 py-3 rounded-r-md font-medium hover:bg-[#4338CA] transition-colors duration-200"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white'
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;