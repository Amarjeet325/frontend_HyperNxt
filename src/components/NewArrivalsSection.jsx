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
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-light text-gray-700">
          Newly Arrived Brands
        </h2>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button className="text-sm text-gray-500 hover:text-gray-800 whitespace-nowrap">
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

      {/* Cards */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          sm:grid sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          sm:gap-6
          sm:overflow-visible
        "
      >
        {brands.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[260px] sm:min-w-0
              bg-white rounded-2xl
              shadow-sm hover:shadow-md
              transition
              p-5
              flex items-center gap-4
            "
          >
            {/* Image */}
            <div
              className={`
                w-16 h-16 sm:w-20 sm:h-20
                rounded-xl
                flex items-center justify-center
                ${item.bg}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-700">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-snug">
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
