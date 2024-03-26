"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./nav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="menu-button"
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
