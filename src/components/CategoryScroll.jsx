const categories = [
  { id: 1, name: "Home & Living", image: "/cimg/1.png" },
  { id: 2, name: "Grocery", image: "/cimg/2.png" },
  { id: 3, name: "Daily Spices", image: "/cimg/3.png" },
  { id: 4, name: "Category 4", image: "/cimg/4.png" },
  { id: 5, name: "Category 5", image: "/cimg/5.png" },
  { id: 6, name: "Baby & Kids", image: "/cimg/6.png" },
];

const CategoryScroll = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
      {/* Categories */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          sm:grid sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          sm:gap-6
          sm:overflow-visible
        "
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              min-w-[120px] sm:min-w-0
              flex flex-col items-center text-center
              cursor-pointer
            "
          >
            {/* Card */}
            <div
              className="
                w-28 h-28 sm:w-32 sm:h-32
                bg-white rounded-2xl
                shadow-sm hover:shadow-md
                transition
                flex items-center justify-center
              "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
            </div>

            {/* Label */}
            <p className="mt-3 text-xs sm:text-sm font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryScroll;
