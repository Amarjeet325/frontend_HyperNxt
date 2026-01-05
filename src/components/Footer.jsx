import { useState } from "react";
import {
  ShoppingCartIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed email:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t">
      {/* TOP FEATURES */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <Feature icon={ShoppingCartIcon} title="Free delivery" desc="Lorem ipsum dolor sit amet, consectetur adipi elit." />
        <Feature icon={ShieldCheckIcon} title="100% secure payment" desc="Lorem ipsum dolor sit amet, consectetur adipi elit." />
        <Feature icon={BuildingStorefrontIcon} title="Quality guarantee" desc="Lorem ipsum dolor sit amet, consectetur adipi elit." />
        <Feature icon={HeartIcon} title="Guaranteed savings" desc="Lorem ipsum dolor sit amet, consectetur adipi elit." />
        <Feature icon={GiftIcon} title="Daily offers" desc="Lorem ipsum dolor sit amet, consectetur adipi elit." />
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* BRAND */}
        <div className="text-center sm:text-left">
          <img src="/images/logo.png" alt="Logo" className="w-28 mx-auto sm:mx-0 mb-4" />

          <div className="flex justify-center sm:justify-start gap-3 mt-4">
            {["f", "t", "y", "i", "a"].map((item, i) => (
              <span
                key={i}
                className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-400 hover:text-black cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <FooterLinks title="Ultras" links={[
          "About us",
          "Conditions",
          "Our Journals",
          "Careers",
          "Affiliate Programme",
          "Ultras Press",
        ]} />

        <FooterLinks title="Customer Service" links={[
          "FAQ",
          "Contact",
          "Privacy Policy",
          "Returns & Refunds",
          "Cookie Guidelines",
          "Delivery Information",
        ]} />

        <FooterLinks title="Support" links={[
          "Help Center",
          "Order Tracking",
          "Report Issue",
          "Payment Options",
          "Shipping Policy",
        ]} />

        {/* SUBSCRIBE */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-medium mb-4">Subscribe Us</h3>
          <p className="text-gray-500 mb-4 text-sm">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0"
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-lg sm:rounded-r-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-green-600 text-sm mt-3">
              ✔ Subscribed successfully!
            </p>
          )}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-3 text-center sm:text-left">
          <p>© 2023 Siazhub. All rights reserved.</p>
          <p>
            Designed By{" "}
            <span className="text-black font-medium">
              Amarjeet Patel
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------- Helper Components ---------- */

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 text-center sm:text-left">
    <Icon className="w-7 h-7 text-gray-700 flex-shrink-0" />
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div className="text-center sm:text-left">
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-500 text-sm">
      {links.map((link, index) => (
        <li key={index} className="hover:text-black">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="block"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
