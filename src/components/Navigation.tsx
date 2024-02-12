import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
return (
 <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white "> 
   <span className="font-bold">React 2023</span>
   <span>
    
    <Link to="/about" className="mg-20">About</Link>
    <Link to="/">Products</Link>
    
   </span>
 </nav>
)
}

export default Navigation;