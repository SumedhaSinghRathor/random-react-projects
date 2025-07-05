import cd from "./cd.svg";
import cover from "./cover.svg";
import { motion } from "motion/react";

function Logo() {
  return (
    <section className="grow flex justify-center items-center">
      <div className="size-fit flex relative">
        <motion.img
          src={cd}
          width={200}
          height={200}
          alt="cd"
          className="relative"
          animate={{ bottom: 80, left: 26 }}
          transition={{ delay: 1, duration: 0.75 }}
        />
        <motion.img
          src={cover}
          width={200}
          height={200}
          alt="cover"
          className="absolute"
          animate={{ transform: "rotate(-4deg)", left: -64, top: 32 }}
          transition={{ delay: 1, duration: 0.75 }}
        />
      </div>
    </section>
  );
}

export default Logo;
