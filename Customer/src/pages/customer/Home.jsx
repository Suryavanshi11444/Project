import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";

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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      comment: "The quality of products here is exceptional. I've been shopping for years and never been disappointed!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Loyal Customer",
      comment: "Fast shipping and great customer service. The summer collection is my favorite!",
      rating: 4.5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "First-time Buyer",
      comment: "I was hesitant at first but the products exceeded my expectations. Will definitely shop again!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const salesData = [
    { month: "Jan", sales: 12500, trend: "up", percentage: 12 },
    { month: "Feb", sales: 11800, trend: "down", percentage: 5 },
    { month: "Mar", sales: 14500, trend: "up", percentage: 23 },
    { month: "Apr", sales: 16200, trend: "up", percentage: 12 },
    { month: "May", sales: 18900, trend: "up", percentage: 17 },
    { month: "Jun", sales: 21000, trend: "up", percentage: 11 }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

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
          <Link 
            to="/productlist" 
            className="inline-block px-8 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium rounded-md transition-colors duration-200"
          >
            Shop Now
          </Link>
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
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 bg-gray-50">
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

      {/* Customer Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Statistics */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Monthly Sales Performance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {salesData.map((monthData, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-800 mb-2">{monthData.month}</h3>
              <p className="text-xl font-semibold mb-1">${monthData.sales.toLocaleString()}</p>
              <div className={`flex items-center justify-center ${monthData.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {monthData.trend === "up" ? (
                  <RiArrowUpLine className="mr-1" />
                ) : (
                  <RiArrowDownLine className="mr-1" />
                )}
                <span>{monthData.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-green-500">23% increase</span> in sales compared to last year
          </p>
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