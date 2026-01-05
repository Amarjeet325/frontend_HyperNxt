import {
  HomeIcon,
  ShoppingCartIcon,
  FireIcon,
  SparklesIcon,
  HandRaisedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { id: 1, name: "Home & Living", icon: HomeIcon },
  { id: 2, name: "Grocery", icon: ShoppingCartIcon },
  { id: 3, name: "Daily Spices", icon: FireIcon },
  { id: 4, name: "Household", icon: SparklesIcon },
  { id: 5, name: "Personal Care", icon: HandRaisedIcon },
  { id: 6, name: "Baby & Kids", icon: UserIcon },
];

const CategoryIconsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-light text-gray-700">
          Category
        </h2>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button className="text-sm text-gray-500 hover:text-black whitespace-nowrap">
            View All Categories →
          </button>

          {/* Desktop arrows */}
          <div className="hidden sm:flex gap-2">
            <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600">
              ‹
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:text-black">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          sm:grid sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          sm:overflow-visible
        "
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="
                min-w-[140px] sm:min-w-0
                bg-white rounded-2xl
                p-6 sm:p-8
                flex flex-col items-center justify-center
                shadow-sm hover:shadow-md
                transition cursor-pointer
                text-center
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-500" />
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm font-medium text-gray-800">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryIconsSection;
