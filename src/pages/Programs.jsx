import React, { useState } from "react";
import Mpro1 from "../assets/images/Mpro1.jpg";
import Mpro3 from "../assets/images/Mpro3.jpg";
import Mpro4 from "../assets/images/Mpro4.jpg";

import Wpro1 from "../assets/images/Wpro1.jpg";
import Wpro2 from "../assets/images/Wpro2.jpg";
import Wpro3 from "../assets/images/Wpro3.jpg";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  return (
    <div className="min-h-screen bg-[#898989] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-black mb-3">
          Explore Our Programs
        </h1>

        <p className="text-center text-white mb-10">
          Find the perfect fitness program to match your goals and get started
          on your journey today.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-md rounded-xl flex p-1">
            <button
              onClick={() => setActiveTab("ladies")}
              className={`px-6 py-2 rounded-xl font-semibold ${
                activeTab === "ladies"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600"
              }`}
            >
              For Ladies
            </button>

            <button
              onClick={() => setActiveTab("gents")}
              className={`px-6 py-2 rounded-xl font-semibold ${
                activeTab === "gents"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600"
              }`}
            >
              For Gents
            </button>
          </div>
        </div>

        {/* Ladies Programs */}
        {activeTab === "ladies" && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Wpro3}
                  className="w-full h-full object-cover"
                  alt="Ladies Toning"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Ladies’ Toning & Fitness
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Focus on full-body toning, strength, and posture.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Wpro2}
                  className="w-full h-full object-cover"
                  alt="Weight Loss"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Weight Loss Program
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cardio & nutrition support tailored for metabolism.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Wpro1}
                  className="w-full h-full object-cover"
                  alt="Zumba"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Zumba & Dance Fitness
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-energy sessions for fitness and stress relief.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gents Programs */}
        {activeTab === "gents" && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Mpro4}
                  className="w-full h-full object-cover"
                  alt="Muscle Gain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Muscle Gain Program
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Intense strength training focused on hypertrophy.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Mpro1}
                  className="w-full h-full object-cover"
                  alt="Fat Burn"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Fat Burn & Conditioning
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  HIIT, circuit training, and cardio-based routines.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-48">
                <img
                  src={Mpro3}
                  className="w-full h-full object-cover"
                  alt="Strength"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  Strength & Powerlifting
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Heavy lifting for building power and endurance.
                </p>
                <button className="w-full bg-yellow-400 py-2 rounded font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
