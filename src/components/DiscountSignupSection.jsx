import { useState } from "react";

const DiscountSignupSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subscribe: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Submitted Data:", formData);
      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subscribe: false,
      });
    }, 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <div
        className="
          bg-[#eaf6fb]
          rounded-2xl sm:rounded-3xl
          p-6 sm:p-10 md:p-14
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-14
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-700 mb-5 leading-tight">
            Get{" "}
            <span className="text-yellow-400 font-medium">
              25% Discount
            </span>{" "}
            on <br className="hidden sm:block" />
            your first purchase
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel
            egestas.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto lg:mx-0"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="
                w-full px-4 py-3
                rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400
              "
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@mail.com"
              className="
                w-full px-4 py-3
                rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400
              "
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mb-5">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-600">
              Subscribe to the newsletter
            </span>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-600 text-sm mb-4">
              🎉 Successfully subscribed! Your discount is applied.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-gray-900 text-white
              py-3 sm:py-4
              rounded-lg text-base sm:text-lg
              hover:bg-gray-800 transition
              disabled:opacity-60
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscountSignupSection;
