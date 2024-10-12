interface SubscriptionCardProps {
    plan: string;
    price: string;
    features: string[];
  }
  
  const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, price, features }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer px-10">
        <h3 className="text-xl font-bold mb-4 hover:text-[#0400ff]">{plan}</h3>
        <p className="text-2xl font-semibold mb-4">{price}</p>
        <ul className="mb-6 ">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700 mb-2 hover:text-[#0400ff]">▸{feature}</li>
          ))}
        </ul>
        <button className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-black ">
          Subscribe Now
        </button>
      </div>
    );
  };
  
  export default SubscriptionCard;
  