import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Dialog({
  selected,
  cardRect,
  closing,
  onClose,
  onCloseComplete,
}) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const updateTarget = () => {
      const width = Math.min(window.innerWidth * 0.6);
      const height = window.innerHeight * 0.6;

      setTarget({
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
        width,
        height,
      });
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);

    return () => window.removeEventListener("resize", updateTarget);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && !closing) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [closing, onClose]);

  if (!target || !cardRect) return null;

  const start = {
    left: cardRect.x,
    top: cardRect.y,
    width: cardRect.width,
    height: cardRect.height,
  };

  return (
    <motion.section
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
      style={{ fontFamily: "Instrument Serif" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => !closing && onClose()}
    >
      <motion.div
        className="fixed box-border flex gap-4 overflow-hidden rounded-lg bg-pink-600 p-4"
        initial={start}
        animate={closing ? start : target}
        transition={{
          left: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          top: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          width: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          height: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        onAnimationComplete={() => {
          if (closing) {
            onCloseComplete();
          }
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Shared image: card <-> dialog */}
        <div className="h-full aspect-2/3 shrink-0 overflow-hidden rounded">
          <motion.img
            layoutId={`cover-${selected.title}`}
            src={selected.cover ?? ""}
            alt={selected.title}
            className="h-full w-full object-cover"
            transition={{
              layout: {
                type: "spring",
                stiffness: 260,
                damping: 28,
              },
            }}
          />
        </div>

        {/* Dialog content */}
        <div className="min-w-0 flex-1 overflow-auto">
          <h1 className="text-3xl font-bold">{selected.title}</h1>
          <h2 className="text-xl italic">by {selected.author}</h2>
        </div>
      </motion.div>
    </motion.section>
  );
}
