const Card = ({ name, avgRating, cuisines, cloudinaryImageId ,sla}) => (
  <div className=" border border-gray-200 rounded-lg shadow-lg m-5 w-64 h-[420px] bg-white p-4 space-y-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    {/* Image */}
    <img
      className="w-full h-40 object-cover rounded-t-lg"
      alt="item"
      src={
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
        cloudinaryImageId
      }
    />

    {/* Restaurant Name */}
    <h1 className="text-lg font-bold text-gray-800 mt-2">{name}</h1>

    {/* Rating */}
    <div className="flex items-center space-x-2 text-sm text-yellow-500">
      <i className="ri-star-fill"></i>
      <p className="font-semibold">{avgRating ? avgRating : 'N/A'}</p>
    </div>

    {/* Cuisines */}
    <div className="flex flex-wrap gap-1 text-sm text-gray-500">
      {cuisines.map((v, idx) => (
        <span key={idx} className="bg-gray-100 rounded-full px-2 py-1">
          {v}
        </span>
      ))}
    </div>

    {/* Buy Button */}
  
      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition duration-300">
      {sla.slaString
      }
      </button>
    
  </div>
);

export default Card;
