import { useNavigate } from "react-router-dom";
import header from "../assets/images/header.png";

const Header = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate("/programs");
  };

  return (
    <header
      className="relative text-white py-20 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${header})`,
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Body, Elevate Your Life
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 leading-relaxed">
          Unlock your potential with the world's best fitness and training
          programs.
        </p>
        <button
          onClick={handleExplorePrograms}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-lg"
        >
          Explore Our Programs
        </button>
      </div>
    </header>
  );
};

export default Header;
