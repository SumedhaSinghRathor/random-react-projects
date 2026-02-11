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
    {
      to: "/nested-radius",
      content: "Nested Radius",
    },
    {
      to: "/calculator",
      content: "Calculator",
    },
    {
      to: "/kanban-board",
      content: "Kanban Board",
    },
    ,
    {
      to: "/pixelpilot",
      content: "Pixel Pilot",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <aside
      className={`fixed w-3xs h-full flex flex-col gap-4 bg-blue-700 p-4 text-white rounded-r-lg transition-transform shadow-2xl z-100 ${
        toggle ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <i
        className="bx bx-menu text-5xl text-white size-12 rounded-r-lg bg-blue-700 fixed top-12 left-64 cursor-pointer shadow-2xl "
        onClick={() => setToggle(!toggle)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="64"
        viewBox="0 0 8 64"
        className="fixed left-64 top-10"
      >
        <path d="M0 64C0 59.5817 3.58172 56 8 56H0V64Z" fill="#1447E6" />
        <path d="M0 0C0 4.41828 3.58172 8 8 8H0V0Z" fill="#1447E6" />
      </svg>
      <Link
        to="/"
        onClick={() => setToggle(false)}
        className="flex gap-4 items-center"
      >
        <img src={logo} alt="react logo" className="size-12 shrink-0" />
        <h1 className="text-lg font-bold leading-6">Mini React Projects</h1>
      </Link>
      <ul className="h-full">
        {projects
          .sort((a, b) => a.content.localeCompare(b.content))
          .map((project) => (
            <Link to={project.to} key={project.content}>
              <li
                key={project.content}
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
