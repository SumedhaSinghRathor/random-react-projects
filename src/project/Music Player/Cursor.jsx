import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import music from "./music.svg";

function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring for smooth movement
  const x = useSpring(mouseX, { stiffness: 300, damping: 60 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 60 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.img
      src={music}
      width={50}
      height={50}
      style={{ x, y }}
      className="fixed -top-6 -left-6 pointer-events-none"
    />
  );
}

export default Cursor;
