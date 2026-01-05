import Api from "./Api";
import fallbackData from "../../../productapi.json";

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
    // fallback to local data if shape differs
    const local = fallbackData?.result?.data?.result;
    return Array.isArray(local) ? local.map(normalize) : [];
  } catch (err) {
    // fallback
    const local = fallbackData?.result?.data?.result;
    return Array.isArray(local) ? local.map(normalize) : [];
  }
}
