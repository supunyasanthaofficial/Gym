const FeatureCard = ({ feature, index }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
