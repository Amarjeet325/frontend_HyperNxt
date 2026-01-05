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

    // Basic validation
    if (!formData.name || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Dummy API simulation
    setTimeout(() => {
      console.log("Submitted Data:", formData);

      setLoading(false);
      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subscribe: false,
      });
    }, 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-[#eaf6fb] rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-6 leading-tight">
            Get <span className="text-yellow-400 font-medium">25% Discount</span>{" "}
            on <br /> your first purchase
          </h2>

          <p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel
            egestas.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-transparent w-full max-w-xl"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@mail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mb-6">
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
            className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscountSignupSection;
