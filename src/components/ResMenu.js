import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ResMenu = () => {
    const param=useParams();
    const [menu,setMenu]=useState(null);

  useEffect(()=>{
    async function fetchmenu(){
      const obj=await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5802402&lng=88.4337248&restaurantId=${param.id}&submitAction=ENTER`);
      const menuobj= await obj.json();
      const menu1=menuobj.data;
      setMenu(menu1)
      console.log(menu1);
   
   
     }

   fetchmenu();


  },[param.id])

 
  const groupedCard = menu?.cards?.find(card => card.groupedCard);

if (!groupedCard) {
  return <p>No groupedCard found.</p>;
}

const regularCard = groupedCard.groupedCard.cardGroupMap.REGULAR.cards?.[2];



if(!menu){
    return <></>
}


    
  return (
    <>
    <div>ResMenu</div>.cards
    <div>Id :{param.id}</div>
    <img 
    className="w-80 h-96" 
    alt="item" 
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menu?.cards[2]?.card?.card?.info?.cloudinaryImageId}`} 
/>

    <div>Id :{menu?.cards[2]?.card?.card?.info?.name}</div>
    <div>Id :{menu?.cards[2]?.card?.card?.info?.city}</div>
    <div>Id :{menu?.cards[2]?.card?.card?.info?.avgRating}</div>
    <div>Id :{menu?.cards[2]?.card?.card?.info?.areaName}</div>
    <div>Id :{menu?.cards[2]?.card?.card?.info?.locality}</div>
    <div className='flex  flex-col items-center justify-center' >
    <h1>{regularCard?.card?.card?.title}</h1>
    {regularCard?.card?.card?.itemCards?.map((val)=>{
      const itemInfo=val.card?.info;
      return(
   
   <div className='border border-black h-auto w-96'>
   <img
     className="w-1/2 h-auto"
     alt="item"
     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemInfo?.imageId}`}
   />
   <h1>Category: {itemInfo?.category || "N/A"}</h1>
   <h1>Name: {itemInfo?.name || "N/A"}</h1>
   <p className='break-words'>{itemInfo?.description || "No description available"}</p>
   <p>
     Price: {itemInfo?.price ? `₹${itemInfo.price}` : "Price not available"}
   </p>
 </div>
      )
    })
   
}


    </div>
    </>
  )
}

export default ResMenu;