"use client";

import { menuSlide } from "@/anim/anim";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./nav-link";
import Curve from "./curve";
import Link from "next/link";
import FooterLink from "./footer-link";

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
      className="menu w-full md:w-1/2"
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
          <FooterLink link="https://t.me/stakenetapp" text="Telegram" />
          <FooterLink
            link="https://instagram.com/stakenetapp"
            text="Instagram"
          />
          <FooterLink link="https://twitter.com/stakenetapp" text="Twitter" />
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
