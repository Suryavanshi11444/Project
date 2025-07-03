import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid";

const dummyProducts = [
  {
    id: 1,
    title: "Girls Summer Dress",
    description: "Light and comfy dress for girls",
    category: "girls-clothes",
    price: 799,
    rating: 4.5,
  image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  {
    id: 2,
    title: "Boys T-Shirt",
    description: "Cotton t-shirt for boys",
    category: "boys-clothes",
    price: 499,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // boy t-shirt
  },
  {
    id: 3,
    title: "Men's Sneakers",
    description: "Stylish sneakers for boys and men",
    category: "shoes",
    price: 1499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // men's shoes
  },
  {
    id: 4,
    title: "Women's Sandals",
    description: "Comfortable sandals for girls",
    category: "slippers",
    price: 999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // women's slippers
  },
  {
    id: 5,
    title: "Girls Kurti Set",
    description: "Festive wear for girls",
    category: "girls-clothes",
    price: 1199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" // girl kurti
  },
];

const staticCategories = [
  "girls-clothes",
  "boys-clothes",
  "shoes",
  "slippers"
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories] = useState(staticCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: "#111827" }}>
            Our Products
          </h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} available
          </p>
        </div>
        <Link
          to="/admin/products/new"
          className="mt-4 md:mt-0 px-6 py-2 rounded-md font-medium"
          style={{
            backgroundColor: "#4F46E5",
            color: "white",
          }}
        >
          Add New Product
        </Link>
      </div>

      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-1" style={{ color: "#111827" }}>
              Search Products
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by name or description..."
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: "#E5E7EB" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1" style={{ color: "#111827" }}>
              Filter by Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: "#E5E7EB", color: "#111827" }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="block text-sm font-medium mb-1" style={{ color: "#111827" }}>
              Sort By
            </label>
            <select
              id="sort"
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: "#E5E7EB", color: "#111827" }}
              disabled
            >
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: "#4F46E5" }}></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4" style={{ color: "#F3F4F6" }}>🧐</div>
          <h3 className="text-xl font-medium mb-2" style={{ color: "#111827" }}>
            No products found
          </h3>
          <p className="mb-6" style={{ color: "#6B7280" }}>
            Try adjusting your search or filter criteria
          </p>
          <button
            className="px-6 py-2 rounded-md font-medium"
            style={{ backgroundColor: "#4F46E5", color: "white" }}
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <ProductGrid products={filteredProducts} />
          <div className="flex justify-between items-center mt-12">
            <div className="text-sm" style={{ color: "#6B7280" }}>
              Showing 1 to {filteredProducts.length} of {filteredProducts.length} products
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
