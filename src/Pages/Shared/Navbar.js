import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/prices">Prices</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/faq">Faq</Link></li>
    <li><Link to="/blog">Order Online</Link></li>
    <li><Link to="/contacts">Contact us</Link></li>
  </>
  return (
    <div className="navbar bg-green-400 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="uppercase menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-center font-bold hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-4 text-white uppercase p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;