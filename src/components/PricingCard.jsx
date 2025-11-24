import React from "react";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";

const PricingCard = ({ plan }) => {
  const getBackgroundImage = (planId) => {
    switch (planId) {
      case 1:
        return bg1;
      case 2:
        return bg2;
      case 3:
        return bg3;
      default:
        return bg1;
    }
  };

  // Plan anuwa background colors set karanna
  const getCardBackground = (planId) => {
    switch (planId) {
      case 1: // Basic
        return "bg-gradient-to-br from-blue-50 to-indigo-100";
      case 2: // Standard (Highlighted)
        return "bg-gradient-to-br from-yellow-50 to-orange-100";
      case 3: // Premium
        return "bg-gradient-to-br from-purple-50 to-pink-100";
      default:
        return "bg-white";
    }
  };

  return (
    <div
      className={`rounded-xl shadow-2xl p-8 relative overflow-hidden border-2 ${
        plan.highlight
          ? "border-yellow-500 transform scale-105 shadow-2xl"
          : "border-gray-200"
      } transition-all duration-300 hover:shadow-2xl ${getCardBackground(
        plan.id
      )}`}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${getBackgroundImage(plan.id)})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Plan Name */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">{plan.name}</h3>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">
            Rs. {plan.price}
          </span>
          <span className="text-gray-600 ml-2 text-lg">/{plan.period}</span>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8 text-left">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition duration-300 ${
            plan.highlight
              ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:shadow-lg transform hover:scale-105"
              : "bg-yellow-500 hover:bg-gray-900 text-black hover:shadow-lg transform hover:scale-105"
          }`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
