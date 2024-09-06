import {Link} from "react-router-dom";
const Header=()=>(

    <>
    <div className="flex justify-between my-5 border border-black bg-purple-100 p-4">
    <div>
    <img className='h-16 w-16 rounded-md'alt="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/34a301116084449.605b053e653c1.jpg"/>
   <div className="italic flex justify-center items-center font-bold">petuk</div>
    </div>
    <ul className="flex space-x-10 justify-center items-center ">
    <li className=" text-lg">Home</li>
      <Link to="/about"><li className="text-lg" >About us</li></Link>
      <Link to="/contact"><li className="text-lg pr-10">Contact us</li></Link>
     </ul>
    </div>
    
    </>
    
    
    )

    export default Header;