import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const productsResponse = await fetch("https://dummyjson.com/products");
        const productsData = await productsResponse.json();
        setProducts(productsData.products || []);

        const categoriesResponse = await fetch("https://dummyjson.com/products/categories");
        const categoriesData = await categoriesResponse.json();

        if (Array.isArray(categoriesData)) {
          setCategories(categoriesData);
        } else {
          setCategories([]);
          console.error("Categories data is not an array:", categoriesData);
        }
        
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || 
                         product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-block">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error Loading Products</h2>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#111827' }}>Our Products</h1>
          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
        <Link 
          to="/admin/products/new" 
          className="mt-4 md:mt-0 px-6 py-2 rounded-md font-medium"
          style={{ 
            backgroundColor: '#4F46E5',
            color: 'white'
          }}
        >
          Add New Product
        </Link>
      </div>

      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Search Products
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by name or description..."
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Filter by Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB', color: '#111827' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {typeof category === 'string' 
                    ? category.charAt(0).toUpperCase() + category.slice(1)
                    : `Category ${index + 1}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Sort By
            </label>
            <select
              id="sort"
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB', color: '#111827' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#4F46E5' }}></div>
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4" style={{ color: '#F3F4F6' }}>🧐</div>
          <h3 className="text-xl font-medium mb-2" style={{ color: '#111827' }}>No products found</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>Try adjusting your search or filter criteria</p>
          <button 
            className="px-6 py-2 rounded-md font-medium"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white'
            }}
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {!loading && filteredProducts.length > 0 && (
        <>
          <ProductGrid products={filteredProducts} />

          <div className="flex justify-between items-center mt-12">
            <div className="text-sm" style={{ color: '#6B7280' }}>
              Showing 1 to {filteredProducts.length} of {filteredProducts.length} products
            </div>
            <div className="flex space-x-2">
              <button 
                className="px-4 py-2 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#F3F4F6',
                  color: '#111827'
                }}
                disabled
              >
                Previous
              </button>
              <button 
                className="px-4 py-2 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#4F46E5',
                  color: 'white'
                }}
              >
                1
              </button>
              <button 
                className="px-4 py-2 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#F3F4F6',
                  color: '#111827'
                }}
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;