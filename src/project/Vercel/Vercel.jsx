import { useEffect, useState } from "react";
import projects from "./projects.js";
import Extra from "./Extra.jsx";

function Vercel() {
  const [grid, setGrid] = useState(() => {
    const saved = localStorage.getItem("gridView");
    return saved ? JSON.parse(saved) : true;
  });
  const [search, setSearch] = useState("");
  const [selectExtra, setSelectExtra] = useState(null);
  const [sortConfig, setSortConfig] = useState("none");

  useEffect(() => {
    localStorage.setItem("gridView", JSON.stringify(grid));
  }, [grid]);

  const toggleSort = () => {
    setSortConfig((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
  };

  const processedProjects = projects
    .filter((item) =>
      search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      if (sortConfig === "asc") return a.name.localeCompare(b.name);
      if (sortConfig === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <section
      className="w-screen h-screen p-2 bg-[#fffafa]"
      style={{ fontFamily: `"Geist", sans-serif` }}
    >
      <h1 className="text-4xl text-center font-bold">Potential Projects</h1>
      <br />
      <form className="w-full flex items-center gap-4 p-2 text-2xl">
        <input
          type="text"
          className="focus:outline-none px-2 py-1.5 text-end rounded border-1 border-black/30 text-xl grow"
          onChange={(e) => setSearch(e.target.value)}
        />
        <i
          className={`bx border border-black/30 p-2 rounded ${
            sortConfig === "asc"
              ? "bx-sort-a-z text-white bg-black"
              : sortConfig === "desc"
                ? "bx-sort-z-a text-white bg-black"
                : "bx-sort-a-z"
          }`}
          onClick={toggleSort}
          title={`Sort: ${sortConfig}`}
        />
        <div className="flex items-center p-1 border border-black/30 rounded">
          <i
            className={`bx bxs-grid-alt p-1 rounded transition-colors ${
              grid ? "bg-black/20" : ""
            }`}
            onClick={() => setGrid(true)}
          />
          <i
            className={`bx bx-list-ul p-1 rounded transition-colors ${
              grid ? "" : "bg-black/20"
            }`}
            onClick={() => setGrid(false)}
          />
        </div>
        <div className="text-lg bg-black text-white py-1.5 px-3 rounded font-semibold cursor-pointer">
          Analysis
        </div>
      </form>
      {grid ? (
        <section className="grid grid-cols-3 gap-4 p-2">
          {processedProjects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-black/20 flex flex-col gap-4 p-4 rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="size-9"
                  />
                  <div className="text-sm">
                    <p className="font-bold">{project.name}</p>
                    <a
                      href={`https://${project.href}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline text-black/80 line-clamp-1"
                    >
                      {project.href}
                    </a>
                  </div>
                </div>
                <div className="text-3xl text-black/70 flex items-center gap-2">
                  <a
                    href={`https://github.dev/SumedhaSinghRathor/${project.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bx-code-alt rounded-full hover:bg-slate-500/20" />
                  </a>
                  <i
                    className={`bx bx-dots-horizontal-rounded rounded-full hover:bg-slate-500/20 cursor-pointer ${
                      selectExtra === index ? "bg-slate-500/40" : ""
                    }`}
                    onClick={() =>
                      setSelectExtra(selectExtra === index ? null : index)
                    }
                  />
                </div>
              </div>
              <a
                href={`https://github.com/SumedhaSinghRathor/${project.github}`}
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-full"
              >
                <div className="bg-gray-300 w-fit max-w-full font-semibold flex items-center gap-2 px-2 rounded-full">
                  <i className="bx bxl-github text-xl" />{" "}
                  <p className="line-clamp-1">
                    SumedhaSinghRathor/{project.github}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 p-2">
          {processedProjects.map((project, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-2 border border-black/30 rounded hover:bg-slate-500/20 cursor-pointer ${
                selectExtra === index ? "bg-slate-500/30" : ""
              }`}
              onClick={() =>
                setSelectExtra(selectExtra === index ? null : index)
              }
            >
              <div className="flex items-center gap-4">
                <img src={project.img} alt={project.name} className="size-12" />
                <div>
                  <p className="font-bold">{project.name}</p>
                  <a
                    href={`https://${project.href}`}
                    target="_blank"
                    className="hover:underline text-black/80 line-clamp-1"
                    rel="noreferrer"
                  >
                    {project.href}
                  </a>
                </div>
              </div>
              <a
                href={`https://github.com/SumedhaSinghRathor/${project.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-1 bg-gray-300 px-2 rounded-full font-semibold">
                  <i className="bx bxl-github text-2xl" />
                  <p>SumedhaSinghRathor/{project.github}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      )}
      <Extra
        selectExtra={selectExtra === null ? null : projects[selectExtra]}
        onClose={() => setSelectExtra(null)}
      />
    </section>
  );
}

export default Vercel;
