"use client";

import { motion } from "framer-motion";

const FooterLink = ({ text, link }: { text: string; link: string }) => {
  const menuLinkVariants = {
    open: {
      y: 0,

      opacity: 1,
    },

    closed: {
      y: -10,

      opacity: 0,
    },
  };

  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={link}
      className="h-[30px] overflow-hidden font-medium text-base flex items-start gap-2"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white/70">{text}</span>

        <span className="flex items-center h-[30px] text-white">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FooterLink;
