


const Card=({name,avgRating,cuisines,cloudinaryImageId})=>(

    <div className=" relative border border-blue-100 m-5 w-60 h-96 space-x-2 space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300">
    <img className="w-full h-1/2" alt="item" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +cloudinaryImageId }/>
    <h1>{name}</h1>
    
    <div className="flex space-x-2">
    <p>Rating:   {avgRating}</p>
    <i class="ri-star-fill"></i>
    </div>
    <div className="flex flex-wrap">
  {cuisines.map((v)=>{
    return <p>{v},</p>
    
  })}
  </div>
    
    <div className="bottom-2 right-2 absolute">
    <button >Buy Now!</button>
    </div>
    </div>
    
)

 export default  Card;
    