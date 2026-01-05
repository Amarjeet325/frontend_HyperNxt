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
    // You can also pass state or query params later
    console.log("Clicked:", keyword);
    navigate("/"); // Redirect to Home page
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-6">
        People are also looking for
      </h2>

      <div className="flex flex-wrap gap-4">
        {keywords.map((item, index) => (
          <button
            key={index}
            onClick={() => handleRedirect(item)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PeopleAlsoLookingFor;
