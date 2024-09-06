import React from 'react';
import Card from './Card';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {

    const [res,setRes]=useState(null);
  

useEffect(()=>{fetchapi()},[])

 async function fetchapi(){
const p=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5802402&lng=88.4337248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const d=await p.json();
console.log(d );
//  console.log(d?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.id );
const cards = d?.data?.cards || [];
      const targetCard = cards.find(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
      );

      const restaurants = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // Log to verify the correct data is being processed
      console.log('Restaurants Data:', restaurants);

      setRes(restaurants);
//  setRes(d?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );


 }
if(  !res){
  return <></>
}
  return (
    <div className="flex flex-wrap pl-14 ">
    
        {res.map((v,k)=>{
          return( <Link to={`/resmenu/${v.info.id}`} key={k} >
          <Card  {...v.info}/>
          </Link>
          )
        })} 
      
    </div>
  )
}

export default Body;