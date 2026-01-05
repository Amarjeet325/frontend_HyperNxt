import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/productService";

const MostPopularProducts = () => {
  const [qty, setQty] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProducts()
      .then((data) => mounted && setProducts(data.slice(0, 6)))
      .catch((err) => mounted && setError(err?.message || "Failed to fetch products"))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  const updateQty = (id, type) => {
    setQty((prev) => {
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
        <div>Loading best selling products…</div>
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-light text-gray-700">Most Popular Products</h2>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 hover:text-black">View All Categories →</button>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center">‹</button>
            <button className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">›</button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-6 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="min-w-[260px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition relative">
            {/* Discount */}
            {product.discount && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            )}

            {/* Wishlist */}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center">♥</button>

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
                <span>{qty[product.id] || 1}</span>
                <button onClick={() => updateQty(product.id, "inc")}>+</button>
              </div>

              <button className="text-sm text-gray-600 hover:text-black">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopularProducts;
