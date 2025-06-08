import { useScroll } from "motion/react";
import React, { useEffect, useRef } from "react";

function TextoverHill() {
  const container = useRef();
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <>
      <section className="w-screen h-[50vh] bg-amber-50" />
      <section className="w-screen h-screen bg-amber-50">
        <svg viewBox="0 0 250 90" fill="none">
          <path
            id="curve"
            d="m0, 88.5c61.37, 0, 61.5-68, 126.5-68, 58, 0, 51, 68, 123, 68"
            fill="none"
          />
          <text className="text-[6px] uppercase font-bold">
            {[...Array(3)].map((_, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => (texts.current[i] = ref)}
                  href="#curve"
                  fill="red"
                  startOffset={i * 32 + "%"}
                >
                  Sumedha Singh Rathor
                </textPath>
              );
            })}
          </text>
        </svg>
      </section>
      <section className="w-screen h-44 bg-amber-50" />
    </>
  );
}

export default TextoverHill;
