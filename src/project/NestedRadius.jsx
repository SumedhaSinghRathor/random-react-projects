import { useEffect, useState } from "react";

function NestedRadius() {
  const [padding, setPadding] = useState(() => {
    const saved = localStorage.getItem("padding");
    return saved !== null ? Number(saved) : 20;
  });

  const [border, setBorder] = useState(() => {
    const saved = localStorage.getItem("border");
    return saved !== null ? Number(saved) : 40;
  });

  const outerBorder = border + padding;

  useEffect(() => {
    localStorage.setItem("padding", padding);
    localStorage.setItem("border", border);

    const root = document.documentElement;
    root.style.setProperty("--padding", padding);
    root.style.setProperty("--border-inner", border);
  }, [padding, border]);

  return (
    <section
      className="w-screen h-screen flex flex-col bg-blue-100"
      style={{ fontFamily: "Arial" }}
    >
      <div className="box grow flex justify-center items-center">
        <div
          className="box-1 flex border-4 border-red-500"
          style={{ padding: `${padding}px`, borderRadius: `${outerBorder}px` }}
        >
          <div
            className="box-2 w-2xs aspect-square border-4 border-blue-400 grow relative"
            style={{ borderRadius: `${border}px` }}
          />
        </div>
      </div>
      <div className="rule p-1 text-center">
        Outer Border Radius
        <span
          className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full ml-1"
          id="outer-border"
        >
          {outerBorder}
        </span>{" "}
        = Padding
        <span
          className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full ml-1"
          id="padding-value"
        >
          {padding}
        </span>{" "}
        + Inner Border Radius
        <span
          className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full ml-1"
          id="inner-border"
        >
          {border}
        </span>
      </div>
      <div className="sliders flex items-center justify-around p-5">
        <label htmlFor="padding">
          Padding <br />
          <input
            type="range"
            id="padding"
            name="padding"
            min="0"
            max="100"
            step="1"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
        </label>
        <label htmlFor="rounded">
          Border Radius <br />
          <input
            type="range"
            id="rounded"
            name="rounded"
            min="0"
            max="100"
            step="1"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
          />
        </label>
      </div>
    </section>
  );
}

export default NestedRadius;
