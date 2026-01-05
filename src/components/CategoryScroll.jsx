const categories = [
  {
    id: 1,
    name: "Home & Living",
    image: "/cimg/1.png",
  },
  {
    id: 2,
    name: "Grocery",
    image: "/cimg/2.png",
  },
  {
    id: 3,
    name: "Daily Spices",
    image: "/cimg/3.png",
  },
  {
    id: 4,
    name: "Category 4",
    image: "/cimg/4.png",
  },
  {
    id: 5,
    name: "Category 5",
    image: "/cimg/5.png",
  },
  {
    id: 6,
    name: "Baby & Kids",
    image: "/cimg/6.png",
  },
];

const CategoryScroll = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Scroll container */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Card */}
            <div className="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:shadow-md transition">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Label */}
            <p className="mt-3 text-sm font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryScroll;
