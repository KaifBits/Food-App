// src/components/ResMenu.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';

const ResMenu = () => {
  const param = useParams();
  const [menu, setMenu] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchmenu() {
      const obj = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5802402&lng=88.4337248&restaurantId=${param.id}&submitAction=ENTER`
      );
      const menuobj = await obj.json();
      const menu1 = menuobj.data;
      setMenu(menu1);
      console.log(menu1);
    }

    fetchmenu();
  }, [param.id]);

  const groupedCard = menu?.cards?.find((card) => card.groupedCard);
  if (!groupedCard) {
    return <p className="text-center text-xl font-semibold mt-10">No menu available.</p>;
  }

  const regularCard = groupedCard.groupedCard.cardGroupMap.REGULAR.cards?.[2];
  if (!menu) {
    return <></>;
  }

  const addToCartHandler = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price / 100,
    };
    dispatch(addItemToCart(cartItem));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{menu?.cards[2]?.card?.card?.info?.name}</h1>
        <p className="text-lg text-gray-500">{menu?.cards[2]?.card?.card?.info?.city}</p>
        <p className="text-lg text-gray-500 mb-4">{menu?.cards[2]?.card?.card?.info?.areaName}, {menu?.cards[2]?.card?.card?.info?.locality}</p>
        <img
          className="w-80 h-80 object-cover mx-auto rounded-lg shadow-md mb-4"
          alt="restaurant"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menu?.cards[2]?.card?.card?.info?.cloudinaryImageId}`}
        />
        <div className="flex justify-center space-x-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-lg">
            ⭐ {menu?.cards[2]?.card?.card?.info?.avgRating}
          </span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">{regularCard?.card?.card?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularCard?.card?.card?.itemCards?.map((val) => {
            const itemInfo = val.card?.info;
            return (
              <div key={itemInfo?.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
                <img
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  alt="item"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemInfo?.imageId}`}
                />
                <h3 className="text-lg font-semibold mb-2">{itemInfo?.name || "N/A"}</h3>
                <p className="text-sm text-gray-600 mb-2">{itemInfo?.category || "N/A"}</p>
                <p className="text-sm text-gray-500 mb-2">{itemInfo?.description || "No description available"}</p>
                <p className="text-lg font-bold">{itemInfo?.price ? `₹${itemInfo.price / 100}` : "Price not available"}</p>
                <button
                  onClick={() => addToCartHandler(itemInfo)}
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
