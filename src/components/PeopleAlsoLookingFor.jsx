import { useNavigate } from "react-router-dom";

const keywords = [
  "Blue diamond almonds",
  "Angie's Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Chao Cheese Creamy",
  "Chicken meatballs",
];

const PeopleAlsoLookingFor = () => {
  const navigate = useNavigate();

  const handleRedirect = (keyword) => {
    console.log("Clicked:", keyword);
    navigate("/");
    // ensure the page scrolls to the top of the header after navigation
    // add a tiny delay to allow the route change to settle if already on "/"
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 mb-5 text-center sm:text-left">
        People are also looking for
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
        {keywords.map((item, index) => (
          <button
            key={index}
            onClick={() => handleRedirect(item)}
            className="
              bg-yellow-400 hover:bg-yellow-500
              text-black
              px-3 sm:px-4
              py-2 sm:py-2.5
              rounded-lg
              text-xs sm:text-sm
              font-medium
              transition
              whitespace-nowrap
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PeopleAlsoLookingFor;
