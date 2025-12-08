import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";

const PricingCard = ({ plan }) => {
  const getBackgroundImage = (planId) => {
    switch (planId) {
      case 1:
        return bg1;
      case 2:
        return bg3;
      case 3:
        return bg2;
      default:
        return bg1;
    }
  };

  const getTextColor = (planId, highlight) => {
    if (highlight) return "text-black";
    return "text-yellow-400";
  };

  const titleColor = getTextColor(plan.id, plan.highlight);
  const priceColor = getTextColor(plan.id, plan.highlight);
  const featureColor = getTextColor(plan.id, plan.highlight);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl border h-full ${
        plan.highlight ? "border-yellow-500 scale-105" : "border-gray-300"
      } transition-all duration-300`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url(${getBackgroundImage(plan.id)})`,
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 p-8 text-center h-full flex flex-col">
        <h3 className={`text-3xl font-bold mb-4 ${titleColor}`}>{plan.name}</h3>

        <div className="mb-6">
          <span className={`text-4xl font-bold ${priceColor}`}>
            Rs. {plan.price}
          </span>
          <span className={`ml-2 text-lg ${priceColor}`}>/{plan.period}</span>
        </div>

        <ul className="space-y-4 text-left mb-8 grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`w-6 h-6 mr-3 mt-1 ${
                  plan.highlight ? "text-black" : "text-yellow-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span className={`text-lg ${featureColor}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-bold text-lg mt-auto transition ${
            plan.highlight
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "bg-yellow-500 hover:bg-gray-800 text-white"
          }`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
