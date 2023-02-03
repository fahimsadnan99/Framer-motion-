import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let menu = ["", "About", "Service", "Contact"];
  let [menuList,setMenuList] = useState("")
  return (
    <div className="w-full shadow-xl shadow-black/10 ">
      <div className="px-10 flex justify-between items-center   py-2">
        <NavLink to="/" className="text-4xl font-semibold font-mono">
          Navbar
        </NavLink>

        <div className="flex space-x-4 ">
          {menu?.map((item) => {
            return (
              <NavLink
                to={item.toLowerCase()}
                className={`p-2 text-2xl font-semibold rounded-lg  ${item == menuList ? "bg-slate-700 text-white" : null}`}
             
             onClick={()=> setMenuList(item)}
             >
                {item.length == "" ? "Home" : item}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
