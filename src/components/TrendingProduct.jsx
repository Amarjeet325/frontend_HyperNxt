import { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../utils/productService";
import { CartContext } from "../context/CartContext";

const TrendingProducts = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [quantities, setQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(["ALL"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProducts()
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
        const cats = Array.from(new Set(data.map((p) => p.category))).slice(0, 5);
        setFilters(["ALL", ...cats]);
      })
      .catch((err) => setError(err?.message || "Failed to fetch products"))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  const filteredProducts =
    activeFilter === "ALL"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const updateQty = (id, type) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      return {
        ...prev,
        [id]: type === "inc" ? current + 1 : Math.max(1, current - 1),
      };
    });
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div>Loading trending products…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-red-500">{error}</div>
      </section>
    );
  }

  const { addItem, openCart, openMobileCart } = useContext(CartContext);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-2xl font-light text-gray-700">Trending Products</h2>

        <div className="flex gap-6 text-sm">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-2 transition ${
                activeFilter === filter
                  ? "border-b-2 border-yellow-400 text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 relative"
          >
            {/* Discount */}
            {product.discount && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}

            {/* Wishlist */}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center hover:bg-red-500">
                ♥
            </button>

            {/* Image */}
            <div className="flex justify-center py-6">
              <img src={product.image} alt={product.name} className="w-28 h-28 object-contain" />
            </div>

            {/* Info */}
            <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>

            <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
              <span>{product.unit}</span>
              <span className="text-yellow-400">★</span>
              <span>{product.rating}</span>
            </div>

            <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                <button onClick={() => updateQty(product.id, "dec")}>−</button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => updateQty(product.id, "inc")}>+</button>
              </div>

              <button
                onClick={() => {
                  addItem(product, quantities[product.id] || 1);
                  openCart();
                }}
                className="text-sm text-gray-600 hover:text-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
