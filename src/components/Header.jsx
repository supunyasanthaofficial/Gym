import { useNavigate } from "react-router-dom";
import header from "../assets/images/header.png";

const Header = ({
  title = "Transform Your Body, Elevate Your Life",
  subtitle = "Unlock your potential with the world's best fitness and training programs.",
  showButton = true,
  maxWidth = "max-w-6xl",
}) => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate("/programs");
  };

  return (
    <header
      className="relative text-white py-20 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${header})`,
      }}
    >
      {/* overlay  */}
      <div className="absolute inset-0 bg-black/5"></div>

      <div className={`${maxWidth} mx-auto relative z-10`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 font-medium mb-8 leading-relaxed drop-shadow-lg">
          {subtitle}
        </p>
        {showButton && (
          <button
            onClick={handleExplorePrograms}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            Explore Our Programs
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
