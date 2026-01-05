const AppDownloadSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-[#fff6e5] rounded-[40px] px-6 md:px-16 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT – MOBILE IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/app/mobile-app.png"
            alt="Foodmart Mobile App"
            className="w-[260px] md:w-[300px] drop-shadow-2xl"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6">
            Shop faster with foodmart App
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            sed ptibus liberolactus nonet psryroin.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames
            semper erat ac in suspendisse iaculis.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Amet blandit tortor praesent ante vitae. A, enim pretium mi
            senectus magna. Sagittis sed ptibus liberolactus non et psryroin.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition">
              <img
                src="/images/app/appstore.png"
                alt="App Store"
                className="w-6"
              />
              <span className="text-sm font-medium">App Store</span>
            </button>

            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition">
              <img
                src="/images/app/playstore.png"
                alt="Google Play"
                className="w-6"
              />
              <span className="text-sm font-medium">Google Play</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppDownloadSection;
