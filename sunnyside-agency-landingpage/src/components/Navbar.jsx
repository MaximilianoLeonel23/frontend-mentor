import React, { useState } from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <div className="sm:container flex justify-between items-center px-8 mx-auto py-6">
        <div>
          <img src={logo} className="cursor-pointer" />
        </div>
        <ul className="hidden sm:flex items-center gap-8 text-neutral-white ">
          <li>
            <a href="/" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="navbar-link">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <button className="contact-btn">CONTACT</button>
          </li>
        </ul>
        <div className="sm:hidden" onClick={handleMenu}>
          <img src={menu} />
        </div>
      </div>
      {/* Mobile menu */}
      {menuVisible && (
        <>
          <div className="fixed sm:hidden inset-0 mx-8 mt-24 sm:m-0 z-50 py-8 h-fit">
            <div className="menu-deco"></div>
            <div className="bg-neutral-white py-12">
              <ul className="flex flex-col items-center gap-y-8">
                <li>
                  <a href="/" className="navbar-link-mobile">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="navbar-link-mobile">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" className="navbar-link-mobile">
                    Projects
                  </a>
                </li>
                <li>
                  <button className="contact-btn-mobile">CONTACT</button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
