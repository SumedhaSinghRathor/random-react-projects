import stock from "../../assets/Mask group.ico";
import react from "../../assets/react_icon_130845.ico";
import player from "../../assets/ye old.ico";
import quant from "../../assets/logo.ico";
import ssr from "../../assets/Asset 1.ico";
import pixel from "../../assets/favicon.ico";
import cloud from "../../assets/cloud.png";
import { useState } from "react";

function Vercel() {
  const projects = [
    {
      name: "stock-predictor",
      href: "stock-predictor-three.vercel.app",
      github: "Stock-Predictor",
      img: stock,
    },
    {
      name: "quant-sight",
      href: "quant-sight.vercel.app",
      github: "QuantSight",
      img: quant,
    },
    {
      name: "random-react-projects",
      href: "random-react-projects.vercel.app",
      github: "random-react-projects",
      img: react,
    },
    {
      name: "personal-music",
      href: "personal-music.vercel.app",
      github: "music-player",
      img: player,
    },
    {
      name: "personal-portfolio",
      href: "sumedhasinghrathor.vercel.app",
      github: "personal-portfolio",
      img: ssr,
    },
    {
      name: "pixel-pilot",
      href: "pixel-pilot.vercel.app",
      github: "pixel-pilot",
      img: pixel,
    },
    {
      name: "weather-app",
      href: "sumedhasinghrathor-weatherdashboard.vercel.app",
      github: "WeatherApp",
      img: cloud,
    },
  ];

  const [grid, setGrid] = useState(true);

  return (
    <section
      className="w-screen h-screen p-2"
      style={{ fontFamily: `"Geist", sans-serif` }}
    >
      <h1 className="text-4xl text-center font-bold">Deployed Projects</h1>
      <br />
      <div className="w-full flex items-center gap-4 p-2 text-2xl">
        <input
          type="text"
          className="focus:outline-none px-2 py-1.5 text-end rounded border-1 border-black/30 text-xl grow"
        />
        <i className="bx bx-sort-a-z border border-black/30 p-2 rounded" />
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
      </div>
      {grid ? (
        <section className="grid grid-cols-3 gap-4 p-2">
          {projects.map((project) => (
            <div className="border-2 border-black/20 flex flex-col gap-4 p-4 rounded-lg">
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
                      className="hover:underline text-black/80 line-clamp-1"
                    >
                      {project.href}
                    </a>
                  </div>
                </div>
                <div className="text-3xl text-black/70 flex items-center gap-2">
                  <i className="bx bx-code-alt border border-black rounded-full" />
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
              <a
                href={`https://github.com/SumedhaSinghRathor/${project.github}`}
                target="_blank"
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
          {projects.map((project) => (
            <div className="flex justify-between items-center p-2 border border-black/30 rounded">
              <div className="flex items-center gap-4">
                <img src={project.img} alt={project.name} className="size-12" />
                <div>
                  <p className="font-bold">{project.name}</p>
                  <a
                    href={`https://${project.href}`}
                    target="_blank"
                    className="hover:underline text-black/80 line-clamp-1"
                  >
                    {project.href}
                  </a>
                </div>
              </div>
              <a
                href={`https://github.com/SumedhaSinghRathor/${project.github}`}
                target="_blank"
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
    </section>
  );
}

export default Vercel;
