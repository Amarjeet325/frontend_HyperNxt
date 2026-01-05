const PromoBannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT BANNER */}
        <div className="bg-[#fdeee7] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="max-w-md text-center md:text-left">
            <p className="text-yellow-500 text-lg sm:text-xl mb-2 sm:mb-3">
              Upto 25% Off
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-3">
              Luxa Dark Chocolate
            </h2>

            <p className="text-gray-500 mb-5 text-sm sm:text-base">
              Very tasty & creamy vanilla flavour creamy muffins.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition">
              SHOP NOW
            </button>
          </div>

          {/* Image */}
          <div className="mt-4 md:mt-0">
            <img
              src="/images/promos/chocolate.png"
              alt="Dark Chocolate"
              className="w-40 sm:w-48 md:w-64 rotate-[-12deg]"
            />
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div className="bg-[#eaf6fb] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="max-w-md text-center md:text-left">
            <p className="text-yellow-500 text-lg sm:text-xl mb-2 sm:mb-3">
              Upto 25% Off
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-3">
              Creamy Muffins
            </h2>

            <p className="text-gray-500 mb-5 text-sm sm:text-base">
              Very tasty & creamy vanilla flavour creamy muffins.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition">
              SHOP NOW
            </button>
          </div>

          {/* Image */}
          <div className="mt-4 md:mt-0">
            <img
              src="/images/promos/muffins.png"
              alt="Creamy Muffins"
              className="w-36 sm:w-44 md:w-56"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBannerSection;
