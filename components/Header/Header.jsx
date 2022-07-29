import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pages = ["A propos", "Projets", "Contact"];
  const navLinks = pages.map((page) => (
    <a
      key={page}
      className="no-underline text-gray-800 font-semibold hover:text-gray-600 navlink p-4 font-Montserrat"
      href={`#${page.toLowerCase()}`}
    >
      {page}
    </a>
  ));

  return (
    <header id="header" className="bg-background h-[10vh]">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
      {isOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </header>
  );
};

export default Header;
