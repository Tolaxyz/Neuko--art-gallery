"use client";

import { motion } from "framer-motion";
import "../styles/burningText.css"; // create this CSS file

export default function Header() {
  return (
    <motion.h1 className="burning-text text-4xl md:text-5xl font-extrabold text-center mt-6">
      NEUKO art gallery ¡¡¡
    </motion.h1>
  );
}
