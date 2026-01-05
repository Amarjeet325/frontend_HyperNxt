import {
  HomeIcon,
  ShoppingCartIcon,
  FireIcon,
  SparklesIcon,
  HandRaisedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    id: 1,
    name: "Home & Living",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Grocery",
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    name: "Daily Spices",
    icon: FireIcon,
  },
  {
    id: 4,
    name: "Household",
    icon: SparklesIcon,
  },
  {
    id: 5,
    name: "Personal Care",
    icon: HandRaisedIcon,
  },
  {
    id: 6,
    name: "Baby & Kids",
    icon: UserIcon,
  },
];

const CategoryIconsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-light text-gray-700">
          Category
        </h2>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 hover:text-black">
            View All Categories →
          </button>

          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
              ‹
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-indigo-500" />
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-gray-800 text-center">
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
