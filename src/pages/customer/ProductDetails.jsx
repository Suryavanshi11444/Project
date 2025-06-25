import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
              src={product.images?.[selectedImage] || product.thumbnail} 
              alt={product.title} 
              className="w-full h-96 object-contain p-4"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto py-2">
            {product.images?.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-[#4F46E5]' : 'border-transparent'}`}
              >
                <img 
                  src={img} 
                  alt={`${product.title} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
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
              ${product.price}
              {product.discountPercentage && (
                <span className="text-sm ml-2 line-through" style={{ color: '#6B7280' }}>
                  ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
                </span>
              )}
            </p>
            {product.discountPercentage && (
              <span className="inline-block px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: '#0EA5E9', color: 'white' }}>
                {Math.round(product.discountPercentage)}% OFF
              </span>
            )}
          </div>

          <p className="text-lg mb-6" style={{ color: '#111827' }}>{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2" style={{ color: '#111827' }}>Details</h3>
            <ul className="space-y-1 text-sm" style={{ color: '#6B7280' }}>
              <li>Brand: {product.brand}</li>
              <li>Category: {product.category}</li>
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