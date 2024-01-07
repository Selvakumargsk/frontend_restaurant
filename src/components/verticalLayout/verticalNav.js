import React from 'react';
import Logo from "../../images/logo.png";
import Dropdown from '../otherComponents/dropdown';
import { NavLink } from 'react-router-dom';



const VerticalLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="w-0 md:w-[20vw] h-[100vh] bg-gray-200 fixed overflow-y-auto">
        <div className="h-[10vh] bg-[#000000]">
        <img src={Logo} alt="logo" height={"70"} width="200" />
        </div>
        <ul className="py-4">
          <li className="py-2 pl-4 hover:bg-gray-300">
            <NavLink className='no-underline' to={"/users"}>Users</NavLink>
          </li>
          <li className="py-2 pl-4 hover:bg-gray-300">
            <NavLink className='no-underline' to={"/menu "}>Products</NavLink>
          </li>
          <li className="py-2 pl-4 hover:bg-gray-300 no">
          <NavLink className='no-underline' to={"/bookingDetails"}>bookingDetails</NavLink>
          </li>
          <li className="py-2 pl-4 hover:bg-gray-300">
            <NavLink className='no-underline' to={"/"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <main className='md:ml-[20vw] overflow-x-hidden'>
    <div className='mx-2 w-[100vw] md:w-[80vw] h-[10vh] bg-gray-200 flex items-center shadow-md'>
    <h2 className='flex justify-center w-full'>Admin</h2>
    <div className='pr-4'><Dropdown /></div>
    </div>
    <div>{children}</div>
      </main>
    </div>
  );
};

export default VerticalLayout;
