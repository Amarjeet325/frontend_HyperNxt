import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/productService";

const BestSellingProducts = () => {
  const [qty, setQty] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProducts()
      .then((data) => mounted && setProducts(data.slice(0, 6)))
      .catch((err) =>
        mounted && setError(err?.message || "Failed to fetch products")
      )
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
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center text-gray-500">
          Loading best selling products…
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-light text-gray-700">
          Best selling products
        </h2>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button className="text-sm text-gray-500 hover:text-black whitespace-nowrap">
            View All Categories →
          </button>

          <div className="hidden sm:flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center">
              ‹
            </button>
            <button className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          sm:grid sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
          sm:overflow-visible
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              min-w-[260px] sm:min-w-0
              bg-white rounded-2xl p-4
              shadow-sm hover:shadow-md transition
              relative
            "
          >
            {/* Discount */}
            {product.discount && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}

            {/* Wishlist */}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100">
              ♥
            </button>

            {/* Image */}
            <div className="flex justify-center py-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>

            {/* Info */}
            <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
              <span>{product.unit}</span>
              <span className="text-yellow-400">★</span>
              <span>{product.rating}</span>
            </div>

            <p className="text-lg font-semibold mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
                <button
                  onClick={() => updateQty(product.id, "dec")}
                  className="text-lg"
                >
                  −
                </button>
                <span>{qty[product.id] || 1}</span>
                <button
                  onClick={() => updateQty(product.id, "inc")}
                  className="text-lg"
                >
                  +
                </button>
              </div>

              <button className="text-sm font-medium text-gray-600 hover:text-black whitespace-nowrap">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
