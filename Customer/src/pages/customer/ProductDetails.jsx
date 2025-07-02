import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const dummyProducts = [
  {
    id: 1,
    title: "Girls Summer Dress",
    description: "Light and comfy dress for girls",
    category: "girls-clothes",
    price: 799,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 10
  },
  {
    id: 2,
    title: "Boys T-Shirt",
    description: "Cotton t-shirt for boys",
    category: "boys-clothes",
    price: 499,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    id: 3,
    title: "Men's Sneakers",
    description: "Stylish sneakers for boys and men",
    category: "shoes",
    price: 1499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 8
  },
  {
    id: 4,
    title: "Women's Sandals",
    description: "Comfortable sandals for girls",
    category: "slippers",
    price: 999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 12
  },
  {
    id: 5,
    title: "Girls Kurti Set",
    description: "Festive wear for girls",
    category: "girls-clothes",
    price: 1199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 5
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    // Simulate API call with dummy data
    setTimeout(() => {
      const foundProduct = dummyProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#4F46E5' }}></div>
    </div>
  );

  if (!product) return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Product not found</h2>
      <Link 
        to="/products" 
        className="inline-block px-6 py-2 rounded-md font-medium"
        style={{ 
          backgroundColor: '#4F46E5',
          color: 'white'
        }}
      >
        Browse Products
      </Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-sm mb-6" style={{ color: '#6B7280' }}>
        <Link to="/" className="hover:text-[#4F46E5]">Home</Link> / 
        <Link to="/products" className="hover:text-[#4F46E5]"> Products</Link> / 
        <span className="font-medium" style={{ color: '#111827' }}> {product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4" style={{ border: '1px solid #E5E7EB' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-96 object-contain p-4"
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#111827' }}>{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
            </div>
            <span className="text-sm" style={{ color: '#6B7280' }}>
              {product.rating} ({product.stock} in stock)
            </span>
          </div>

          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#F3F4F6' }}>
            <p className="text-3xl font-bold mb-2" style={{ color: '#4F46E5' }}>
              ₹{product.price}
            </p>
          </div>

          <p className="text-lg mb-6" style={{ color: '#111827' }}>{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2" style={{ color: '#111827' }}>Details</h3>
            <ul className="space-y-1 text-sm" style={{ color: '#6B7280' }}>
              <li>Category: {product.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</li>
              <li>Availability: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 px-6 py-3 rounded-md font-medium hover:bg-[#4338CA] transition-colors duration-200"
              style={{ 
                backgroundColor: '#4F46E5',
                color: 'white'
              }}
              onClick={() => addToCart({...product, quantity: 1})}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 px-6 py-3 rounded-md font-medium border hover:bg-gray-50 transition-colors duration-200"
              style={{ 
                borderColor: '#4F46E5',
                color: '#4F46E5'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>Customer Reviews</h2>
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #E5E7EB' }}>
          <p className="text-center" style={{ color: '#6B7280' }}>No reviews yet. Be the first to review!</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;