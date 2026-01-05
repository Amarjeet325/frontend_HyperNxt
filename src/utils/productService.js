import Api from "./Api";


const normalize = (item) => ({
  id: item._id,
  name: item.product_name || "Untitled Product",
  price: item.price?.actual_price ?? 0,
  discount:
    item.price?.discount_percentage > 0
      ? `-${item.price.discount_percentage}%`
      : null,
  image: item.images && item.images.length ? item.images[0] : "/images/products/banana.png",
  unit: item.quantity ? `${item.quantity} UNIT` : "1 UNIT",
  rating: 4.5,
  category: item.category_id || "UNCAT",
  raw: item,
});

export async function fetchProducts() {
  try {
    const res = await Api.get(`/`);
    const items = res?.data?.result?.data?.result;
    if (Array.isArray(items)) {
      return items.map(normalize);
    }
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
