"use client";

import { menuSlide } from "@/anim/anim";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./nav-link";
import Curve from "./curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "FAQs",
    href: "/#faqs",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body items-start">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
        <div className="footer pb-12">
          <a>Telegram</a>
          <a>Instagram</a>
          <a>Twitter</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
