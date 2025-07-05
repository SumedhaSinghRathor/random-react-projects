import Logo from "./Logo";
import Cursor from "./Cursor";
import { motion } from "motion/react";

function MusicPlayer() {
  return (
    <section
      className="h-screen flex flex-col p-6 bg-[#662d91]"
      style={{ fontFamily: `"Pixelify Sans", sans-serif` }}
    >
      <Logo />
      <motion.p
        initial={{ y: 70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-5xl font-semibold text-center py-8 text-white"
      >
        My Personal Music Taste
      </motion.p>
      <Cursor />
    </section>
  );
}

export default MusicPlayer;
