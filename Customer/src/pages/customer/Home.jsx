import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const Home = () => {
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
      category: "Men's shoes",
      thumbnail: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
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
      {/* Hero Section */}
      <div
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundColor: "#F3F4F6",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-2xl sm:max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Style, Beauty & Taste in One Place
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white">
            Fashion, beauty, footwear & food — trusted quality, great prices
          </p>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              name: "Men",
              image:
                "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Women",
              image:
                "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Kids",
              image:
                "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Accessories",
              image:
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
          ].map((category, index) => (
            <Link
              key={index}
              to={`/productlist`}
              className="relative group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-75 transition"
              />
              <span className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold text-lg rounded-lg">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Featured Collection */}
<div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
    Featured Collection
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {featuredProducts.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <div className="text-[#4F46E5] font-bold text-md">${product.price}</div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
          Join Our Newsletter
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-600">
          Subscribe to get 10% off your first order and updates on new arrivals
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] w-full"
          />
          <button className="mt-3 sm:mt-0 sm:ml-0 sm:px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
