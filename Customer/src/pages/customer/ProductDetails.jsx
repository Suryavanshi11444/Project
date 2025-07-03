import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import qrCodeImage from "../../assets/qr-code.jpg";

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
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
  
    stock: 15
  },
  {
    id: 3,
    title: "Men's Sneakers",
    description: "Stylish sneakers for boys and men",
    category: "shoes",
    price: 1499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // men's shoes
    stock: 8
  },
  {
    id: 4,
    title: "Women's Sandals",
    description: "Comfortable sandals for girls",
    category: "slippers",
    price: 999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // women's slippers
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
  const [screenshot, setScreenshot] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    const foundProduct = dummyProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  const handleBuyNow = async () => {
    if (!user || !product || !screenshot || !customerName || !whatsappNumber) {
      return alert("Please fill in all details and upload the screenshot.");
    }

    const formData = new FormData();
    formData.append('productId', product.id);
    formData.append('customerId', user._id);
    formData.append('amount', product.price);
    formData.append('customerName', customerName);
    formData.append('whatsappNumber', whatsappNumber);
    formData.append('screenshot', screenshot);

    try {
      await axios.post('http://localhost:5000/api/payments', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Payment submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Payment failed');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );

  if (!product) return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Product not found</h2>
      <Link to="/products" className="inline-block px-6 py-2 rounded-md font-medium bg-indigo-600 text-white">
        Browse Products
      </Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-indigo-600">Home</Link> / 
        <Link to="/products" className="hover:text-indigo-600"> Products</Link> / 
        <span className="font-medium text-gray-900"> {product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 border border-gray-200">
            <img src={product.image} alt={product.title} className="w-full h-96 object-contain p-4" />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} ({product.stock} in stock)
            </span>
          </div>

          <div className="mb-6 p-4 rounded-lg bg-gray-100">
            <p className="text-3xl font-bold text-indigo-600">₹{product.price}</p>
          </div>

          <p className="text-lg mb-6 text-gray-900">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-900">Details</h3>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>Category: {product.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</li>
              <li>Availability: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>
            </ul>
          </div>

          {/* Customer Details */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-300 rounded p-2 w-full mb-4"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
            <input
              type="tel"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="e.g. 9876543210"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* QR Code */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Scan QR to Pay</h3>
            <img
              src={qrCodeImage}
              alt="Scan QR"
              className="w-48 h-48 object-contain border rounded"
            />
          </div>

          {/* Screenshot Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files[0])}
              className="border border-gray-300 rounded p-2 w-full"
            />
            {!screenshot && (
              <p className="text-xs text-red-500 mt-1">* Upload screenshot to proceed</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 px-6 py-3 rounded-md font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
            </button>

            <button
              disabled={!screenshot || !customerName || !whatsappNumber}
              className={`flex-1 px-6 py-3 rounded-md font-medium border transition duration-200 ${
                screenshot && customerName && whatsappNumber
                  ? 'hover:bg-gray-50 border-indigo-600 text-indigo-600'
                  : 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed'
              }`}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p className="text-center text-gray-500">No reviews yet. Be the first to review!</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
