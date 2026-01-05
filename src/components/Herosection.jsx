const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="lg:col-span-2 bg-[#eaf6fb] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Text */}
          <div className="max-w-md text-center lg:text-left">
            <p className="text-yellow-500 text-lg sm:text-xl mb-3 font-medium">
              100% Natural
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-700 mb-4">
              Heinz Tomato <br className="hidden sm:block" /> Ketchup
            </h1>

            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dignissim massa diam elementum.
            </p>

            <button className="border border-gray-700 px-6 py-3 rounded-lg text-sm tracking-wide hover:bg-gray-700 hover:text-white transition">
              SHOP COLLECTION
            </button>
          </div>

          {/* Image */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <img
              src="/images/ketchup.png"
              alt="Heinz Ketchup"
              className="w-40 sm:w-52 md:w-[260px]"
            />
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-6 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">

          {/* TOP SMALL CARD */}
          <div className="bg-[#eef5e6] rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl sm:text-2xl font-medium mb-1">
                20% Off
              </p>

              <p className="text-xs tracking-widest text-gray-500 mb-2">
                ――― SALE
              </p>

              <h3 className="text-xl sm:text-2xl font-light text-gray-700 mb-3">
                Fruits & <br /> Vegetables
              </h3>

              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                Shop Collection <span>→</span>
              </button>
            </div>

            <img
              src="/images/fruits.png"
              alt="Fruits"
              className="w-24 sm:w-28 md:w-32"
            />
          </div>

          {/* BOTTOM SMALL CARD */}
          <div className="bg-[#fbeee8] rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl sm:text-2xl font-medium mb-1">
                15% Off
              </p>

              <p className="text-xs tracking-widest text-gray-500 mb-2">
                ――― SALE
              </p>

              <h3 className="text-xl sm:text-2xl font-light text-gray-700 mb-3">
                Baked <br /> Products
              </h3>

              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                Shop Collection <span>→</span>
              </button>
            </div>

            <img
              src="/images/bread.png"
              alt="Bread"
              className="w-24 sm:w-28 md:w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
