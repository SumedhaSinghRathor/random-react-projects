import { useState } from "react";
import logo from "/react.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const projects = [
    {
      to: "/counter",
      content: "Counter",
    },
    {
      to: "/creditcard",
      content: "Credit Card",
    },
    { to: "/fav", content: "Favorite Stuff" },
    {
      to: "/music-player",
      content: "Music Player",
    },
    {
      to: "/stopwatch",
      content: "Stopwatch",
    },
    {
      to: "/textoverhill",
      content: "Text Over Hill Animation",
    },
    {
      to: "/vercel",
      content: "Vercel Projects",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <aside
      className={`fixed w-3xs h-full flex flex-col gap-4 bg-blue-700 p-4 text-white rounded-r-2xl transition-transform ${
        toggle ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <i
        className="bx bx-menu text-5xl text-white size-12 rounded-r-lg bg-blue-700 fixed top-12 left-64 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      ></i>
      <div className="flex gap-4 items-center">
        <Link to="/" onClick={() => setToggle(false)}>
          <img src={logo} alt="react logo" className="size-12 shrink-0" />
        </Link>
        <h1 className="text-lg font-bold leading-6  ">Mini React Projects</h1>
      </div>
      <ul className="h-full">
        {projects.map((project) => (
          <Link to={project.to}>
            <li
              className="p-2 rounded-lg hover:bg-white/20"
              onClick={() => setToggle(false)}
            >
              {project.content}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
