import { useMemo, useRef, useState } from "react";
import projects from "./projects.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const colors = [
  "#61dafb",
  "#ff6384",
  "#36a2eb",
  "#cc65fe",
  "#ffce56",
  "#68d89b",
  "#331e36",
  "#04e762",
  "#29339b",
  "#ff6384",
];

function Analysis({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [selected, setSelected] = useState(1);

  const {
    barData1,
    barOptions1,
    barData2,
    barOptions2,
    barData3,
    barOptions3,
    pieData1,
    pieOptions1,
    pieData2,
    pieOptions2,
  } = useMemo(() => {
    // Project Types
    const allTypes = projects.flatMap((project) =>
      Array.isArray(project.type) ? project.type : [project.type]
    );

    const typeCounts = allTypes.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const typeLabels = Object.keys(typeCounts);
    const typeData = Object.values(typeCounts);

    // Project Frameworks
    const allFrameworks = projects.flatMap((project) =>
      Array.isArray(project.frameworks)
        ? project.frameworks
        : [project.frameworks]
    );

    const frameworkCounts = allFrameworks.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const frameworkLabels = Object.keys(frameworkCounts);
    const frameworkData = Object.values(frameworkCounts);

    // Project Tools
    const allTools = projects.flatMap((project) =>
      Array.isArray(project.tools) ? project.tools : [project.tools]
    );

    const toolCounts = allTools.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const toolLabels = Object.keys(toolCounts);
    const toolData = Object.values(toolCounts);

    // Project Database
    const allDatabase = projects.flatMap((project) =>
      Array.isArray(project.database) ? project.database : [project.database]
    );

    const databaseCounts = allDatabase.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const databaseLabels = Object.keys(databaseCounts);
    const databaseData = Object.values(databaseCounts);

    // Project Languages
    const allLangs = projects.flatMap((project) =>
      Array.isArray(project.language) ? project.language : [project.language]
    );

    const langCounts = allLangs.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const langLabels = Object.keys(langCounts);
    const langData = Object.values(langCounts);

    return {
      barData1: {
        labels: typeLabels,
        datasets: [
          {
            label: "# of Projects",
            data: typeData,
            backgroundColor: colors[0],
          },
        ],
      },
      barOptions1: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          title: { display: false },
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
      barData2: {
        labels: frameworkLabels,
        datasets: [
          {
            label: "# of Projects",
            data: frameworkData,
            backgroundColor: colors[1],
          },
        ],
      },
      barOptions2: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          title: { display: false },
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
      barData3: {
        labels: toolLabels,
        datasets: [
          {
            label: "# of Projects",
            data: toolData,
            backgroundColor: colors[2],
          },
        ],
      },
      barOptions3: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          title: { display: false },
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
      pieData1: {
        labels: databaseLabels,
        datasets: [
          {
            label: "# of Projects",
            data: databaseData,
            backgroundColor: colors,
          },
        ],
      },
      pieOptions1: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          datalabels: { display: false },
          title: { display: false },
          legend: { enabled: true },
        },
      },
      pieData2: {
        labels: langLabels,
        datasets: [
          {
            label: "# of Projects",
            data: langData,
            backgroundColor: colors,
          },
        ],
      },
      pieOptions2: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          datalabels: { display: false },
          title: { display: false },
          legend: { enabled: true },
        },
      },
    };
  }, [projects]);

  let selectedChart;

  switch (selected) {
    case 2:
      selectedChart = (
        <Bar data={barData2} options={barOptions2} className="my-2" />
      );
      break;
    case 3:
      selectedChart = (
        <Pie data={pieData1} options={pieOptions1} className="my-2" />
      );
      break;
    case 4:
      selectedChart = (
        <Pie data={pieData2} options={pieOptions2} className="my-2" />
      );
      break;
    case 5:
      selectedChart = (
        <Bar data={barData3} options={barOptions3} className="my-2" />
      );
      break;
    default:
      selectedChart = (
        <Bar data={barData1} options={barOptions1} className="my-2" />
      );
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center p-5 bg-black/45 backdrop-blur-sm"
    >
      <div className="bg-white text-black p-5 rounded-md max-w-2xl w-full">
        <h1 className="font-bold">Project Analysis</h1>
        {selectedChart}
        <div className="text-sm">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button
              type="button"
              className={`rounded p-1 ${
                selected === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelected(1)}
            >
              Type
            </button>
            <button
              type="button"
              className={`rounded p-1 ${
                selected === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelected(2)}
            >
              Frameworks
            </button>
            <button
              type="button"
              className={`rounded p-1 ${
                selected === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelected(3)}
            >
              Database
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className={`rounded p-1 ${
                selected === 4
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelected(4)}
            >
              Languages
            </button>
            <button
              type="button"
              className={`rounded p-1 ${
                selected === 5
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelected(5)}
            >
              Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
