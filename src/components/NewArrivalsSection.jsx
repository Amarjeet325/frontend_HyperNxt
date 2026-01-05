const brands = [
  {
    id: 1,
    title: "Amber Jar",
    description: "Honey best nectar you wish to get",
    image: "/images/brands/brand1.jpg",
    bg: "bg-[#d9c7be]",
  },
  {
    id: 2,
    title: "Amber Jar",
    description: "Honey best nectar you wish to get",
    image: "/images/brands/brand2.jpg",
    bg: "bg-[#eaf4f2]",
  },
  {
    id: 3,
    title: "Amber Jar",
    description: "Honey best nectar you wish to get",
    image: "/images/brands/brand3.jpg",
    bg: "bg-[#d8e3c2]",
  },
  {
    id: 4,
    title: "Amber Jar",
    description: "Honey best nectar you wish to get",
    image: "/images/brands/brand4.jpg",
    bg: "bg-[#e5e5e5]",
  },
];

const NewlyArrivedSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light text-gray-700">
          Newly Arrived Brands
        </h2>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 hover:text-gray-800">
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

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-4 scrollbar-hide">
        {brands.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition"
          >
            {/* Image */}
            <div
              className={`w-20 h-20 rounded-xl flex items-center justify-center ${item.bg}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-medium text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewlyArrivedSection;
