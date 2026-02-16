import { useEffect, useRef, useState } from "react";
import projects from "./Vercel/projects";
import profile from "./Vercel/assets/behance profile.jpg";

function Projects() {
  const links = [
    { social: "Behance", link: "https://www.behance.net/sumedhasinghrathor" },
    {
      social: "Instagram",
      link: "https://www.instagram.com/sumedhasinghrathor",
    },
    {
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/sumedha-singh-rathor-93874726a",
    },
  ];

  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProject = (index) => {
    if (!containerRef.current) return;
    if (index < 0 || index >= projects.length) return;

    const container = containerRef.current;
    const project = projectRefs.current[index];

    if (!project) return;

    const containerHeight = container.clientHeight;
    const projectOffset = project.offsetTop;
    const projectHeight = project.clientHeight;

    const scrollTarget =
      projectOffset - containerHeight / 2 + projectHeight / 2;

    container.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight(containerRef.current.clientHeight);
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  });

  const countProjectField = (projects, field) => {
    return projects
      .flatMap((project) => {
        const value = project[field];
        if (!value) return [];
        return Array.isArray(value) ? value : [value];
      })
      .reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
      }, {});
  };

  const frameworkCounts = countProjectField(projects, "frameworks");
  const toolCounts = countProjectField(projects, "tools");
  const databaseCounts = countProjectField(projects, "database");
  const langCounts = countProjectField(projects, "language");

  const skills = {
    ...frameworkCounts,
    ...toolCounts,
    ...databaseCounts,
    ...langCounts,
  };

  const activeProject = projects[activeIndex] || {};

  const activeSkills = new Set([
    ...(activeProject.frameworks || []),
    ...(activeProject.tools || []),
    ...(activeProject.database || []),
    ...(activeProject.language || []),
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      const containerCenter = container.scrollTop + container.clientHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      projectRefs.current.forEach((proj, index) => {
        if (!proj) return;

        const projCenter = proj.offsetTop + proj.clientHeight / 2;

        const distance = Math.abs(containerCenter - projCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ fontFamily: "Manrope" }}
      className="h-screen w-screen bg-[#0C0C0C] text-[#fafafa] flex overflow-hidden"
    >
      <div className="w-2/7 p-3 flex flex-col items-end justify-end">
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center gap-4 text-sm">
            <img
              src={profile}
              alt="profile"
              className="rounded-full size-11 outline outline-offset-2"
            />
            <div className="text-end">
              <p className="font-semibold">Sumedha Singh Rathor</p>
              <a href="https://github.com/SumedhaSinghRathor">
                @SumedhaSinghRathor
              </a>
            </div>
          </div>
          <div className="text-xs text-[#fafafa]/45 flex gap-2">
            {links.map((link) => (
              <a
                key={link.social}
                className="px-2 py-0.5 border rounded-full hover:-translate-y-0.5 hover:bg-[#fafafa]/10 transition-all hover:text-white"
                href={link.link}
                target="_blank"
              >
                {link.social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="w-3/7 border-x border-[#fafafa]/20 flex flex-col overflow-x-clip overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full h-90 shrink-0 border-b border-[#fafafa]/20" />
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            ref={(el) => (projectRefs.current[index] = el)}
            className="border-b border-[#fafafa]/20 p-2 flex flex-col gap-1 snap-center"
          >
            <div className="flex justify-between items-center">
              <a href={proj.href} className="font-bold">
                {proj.name}
              </a>
              <p className="text-sm">{proj.type.join(", ")}</p>
            </div>
            <p className="text-sm">{proj.desc}</p>
            <div className="mx-8 my-4 flex gap-2">
              {proj.carousel?.map((i) => (
                <img key={i} src={i} />
              ))}
            </div>
          </div>
        ))}
        <div className="w-full h-90 shrink-0 border-t border-[#fafafa]/20" />
      </div>
      <div className="w-2/7 p-3 flex flex-col justify-between">
        <div className="text-sm flex flex-col gap-3">
          <p>
            4th Year, B.Tech CSE <br />
            <u>Skills:</u> Full-Stack Development, UI/UX
          </p>
          <p className="text-[#d6d6d6]">
            <u>Born:</u> 16th January 2005
          </p>
          <button className="border border-[#fafafa]/20 w-fit flex items-center gap-2 px-2 py-1 rounded-full hover:-translate-y-0.5 hover:bg-[#fafafa]/20 transition-all duration-200">
            Get in touch{" "}
            <i className="bx bx-up-arrow-alt text-yellow-300 text-xl rotate-45" />
          </button>
        </div>
        <div className="controls text-2xl flex flex-col w-fit gap-2">
          <button
            onClick={() => scrollToProject(activeIndex - 1)}
            className="bx bx-up-arrow-alt p-2 rounded-full opacity-60 transition-opacity bg-[#fafafa]/20 hover:opacity-100"
          />
          <button
            onClick={() => scrollToProject(activeIndex + 1)}
            className="bx bx-down-arrow-alt p-2 rounded-full opacity-60 transition-opacity bg-[#fafafa]/20 hover:opacity-100"
          />
        </div>
        <div className="info text-[#fafafa]/45 text-sm flex flex-wrap gap-1">
          {Object.entries(skills)
            .sort((a, b) => b[1] - a[1])
            .map(([key, value]) => {
              const isActive = activeSkills.has(key);

              return (
                <div
                  key={key}
                  className={`w-fit border rounded-full px-2 ${
                    isActive
                      ? "bg-white text-black border-transparent"
                      : "border-[#fafafa]/20"
                  }`}
                >
                  {key}: {value}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
