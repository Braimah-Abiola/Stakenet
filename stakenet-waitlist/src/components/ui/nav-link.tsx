import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "@/anim/anim";

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const NavLink = ({ data, isActive, setSelectedIndicator }: MenuLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <Link className="" href={href}>
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
