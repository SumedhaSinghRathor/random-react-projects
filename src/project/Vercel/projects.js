import stock from "./assets/Mask group.ico";
import react from "./assets/react_icon_130845.ico";
import player from "./assets/ye old.ico";
import quant from "./assets/logo.ico";
import ssr from "./assets/Asset 1.ico";
import pixel from "./assets/favicon.ico";
import cloud from "./assets/cloud.png";
import tvs from "./assets/tvs.ico";
import nkd from "./assets/nkd.ico";
import quiz from "./assets/quiz.ico";
import crud from "./assets/CRUD.ico";
import SP1 from "./assets/thumbnails/Stock Predictor 1.png";
import SP2 from "./assets/thumbnails/Stock Predictor 2.png";
import SP3 from "./assets/thumbnails/Stock Predictor 3.png";
import SP4 from "./assets/thumbnails/Stock Predictor 4.png";
import SP5 from "./assets/thumbnails/Stock Predictor 5.png";
import QS1 from "./assets/thumbnails/quantasight.vercel.app_.png";
import QS2 from "./assets/thumbnails/quantasight.vercel.app_ (1).png";
import QS3 from "./assets/thumbnails/quantasight.vercel.app_ (2).png";
import QS4 from "./assets/thumbnails/quantasight.vercel.app_ (3).png";
import RRP1 from "./assets/thumbnails/random-react-projects.vercel.app_.png";
import RRP2 from "./assets/thumbnails/random-react-projects.vercel.app_ (1).png";
import RRP3 from "./assets/thumbnails/random-react-projects.vercel.app_ (2).png";
import RRP4 from "./assets/thumbnails/random-react-projects.vercel.app_ (3).png";
import RRP5 from "./assets/thumbnails/random-react-projects.vercel.app_ (4).png";
import RRP6 from "./assets/thumbnails/random-react-projects.vercel.app_textoverhill.png";
import RRP7 from "./assets/thumbnails/random-react-projects.vercel.app_textoverhill (1).png";
import PP1 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_.png";
import PP2 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (1).png";
import PP3 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (2).png";
import PP4 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (3).png";
import PP5 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (4).png";
import PP6 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (5).png";
import PP7 from "./assets/thumbnails/sumedhasinghrathor.vercel.app_ (6).png";
import WD from "./assets/thumbnails/sumedhasinghrathor-weatherdashboard.vercel.app_.png";
import FTS1 from "./assets/thumbnails/fetch-tv-shows.vercel.app_.png";
import FTS2 from "./assets/thumbnails/fetch-tv-shows.vercel.app_ (1).png";
import FTS3 from "./assets/thumbnails/fetch-tv-shows.vercel.app_ (2).png";
import FTS4 from "./assets/thumbnails/fetch-tv-shows.vercel.app_ (3).png";
import PP from "./assets/thumbnails/pixel-pilot.vercel.app_.png";
import NKD1 from "./assets/thumbnails/notes-ki-dukaan.vercel.app_home.png";
import NKD2 from "./assets/thumbnails/notes-ki-dukaan.vercel.app_home (1).png";
import NKD3 from "./assets/thumbnails/notes-ki-dukaan.vercel.app_view.png";
import NKD4 from "./assets/thumbnails/notes-ki-dukaan.vercel.app_view (1).png";
import NKD5 from "./assets/thumbnails/notes-ki-dukaan.vercel.app_user.png";
import CRUD1 from "./assets/thumbnails/nextjsmongodb-fullstack-blog.vercel.app_.png";
import CRUD2 from "./assets/thumbnails/nextjsmongodb-fullstack-blog.vercel.app_ (1).png";
import CRUD3 from "./assets/thumbnails/nextjsmongodb-fullstack-blog.vercel.app_ (2).png";

const projects = [
  {
    title: "CRUD Blog",
    desc: "A full-stack CRUD Blog built with Next.js and MongoDB enables users to create, read, update, and delete posts seamlessly. It features dynamic routing, server-side rendering, and a responsive UI backed by a scalable NoSQL database.",
    name: "nextjs-fullstack-blog",
    href: "nextjsmongodb-fullstack-blog.vercel.app",
    github: "CRUDBlog-NextJSMongoDB",
    img: crud,
    carousel: [CRUD1, CRUD2, CRUD3],
    type: ["Full Stack"],
    frameworks: ["Next.js"],
    database: ["MongoDB"],
    tools: ["TailwindCSS"],
    language: ["JavaScript"],
  },
  {
    title: "Stock Predictor",
    desc: "A full-stack web application that fetches historical stock data, stores it in a database, and uses an LSTM (Long Short-Term Memory) deep learning model to predict future stock prices. Built with Flask for the backend, React for the frontend, and TensorFlow/Keras for the prediction logic.",
    name: "stock-predictor",
    href: "stock-predictor-three.vercel.app",
    github: "Stock-Predictor",
    img: stock,
    carousel: [SP1, SP2, SP3, SP4, SP5],
    type: ["Full Stack", "Machine Learning", "Neural Network"],
    frameworks: ["React.js", "Flask"],
    database: ["PostgreSQL"],
    tools: ["Chart.js", "Tailwind CSS"],
    language: ["JavaScript", "Python"],
  },
  {
    title: "QuantaSight",
    desc: "A medical dashboard for visualizing medical data, built with React. It is a front-end application that allows users to explore and analyze medical datasets.",
    name: "quantasight",
    href: "quantasight.vercel.app",
    github: "QuantSight",
    img: quant,
    carousel: [QS1, QS2, QS3, QS4],
    type: ["Front End"],
    frameworks: ["React.js"],
    database: [],
    tools: ["Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Random React Projects",
    desc: "A collection of random React projects showcasing various functionalities and designs.",
    name: "random-react-projects",
    href: "random-react-projects.vercel.app",
    github: "random-react-projects",
    img: react,
    carousel: [RRP1, RRP2, RRP3, RRP4, RRP5, RRP6, RRP7],
    type: ["Front End"],
    frameworks: ["React.js"],
    database: [],
    tools: ["Tailwind CSS", "Framer-Motion"],
    language: ["JavaScript"],
  },
  {
    title: "My Music Taste",
    desc: "A front end application that showcases my music taste in a visually engaging way.",
    name: "personal-music",
    href: "personal-music.vercel.app",
    github: "music-player",
    img: player,
    type: ["Front End"],
    frameworks: ["React.js"],
    database: [],
    tools: ["Tailwind CSS", "Framer Motion"],
    language: ["TypeScript"],
  },
  {
    title: "My Personal Portfolio",
    name: "personal-portfolio",
    href: "sumedhasinghrathor.vercel.app",
    github: "personal-portfolio",
    img: ssr,
    carousel: [PP1, PP2, PP3, PP4, PP5, PP6, PP7],
    type: ["Front End"],
    frameworks: ["React.js"],
    database: [],
    tools: ["Tailwind CSS", "Chart.js", "GSAP"],
    language: ["JavaScript"],
  },
  {
    title: "Pixel Pilot",
    name: "pixel-pilot",
    href: "pixel-pilot.vercel.app",
    github: "pixel-pilot",
    img: pixel,
    carousel: [PP],
  },
  {
    title: "Weather App",
    name: "weather-app",
    href: "sumedhasinghrathor-weatherdashboard.vercel.app",
    github: "WeatherApp",
    img: cloud,
    carousel: [WD],
    type: ["Front End"],
    frameworks: ["React.js"],
    database: [],
    tools: ["Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Fetch TV Shows",
    name: "fetch-tv-shows",
    href: "fetch-tv-shows.vercel.app",
    github: "Fetch-TVShows",
    img: tvs,
    carousel: [FTS1, FTS2, FTS3, FTS4],
    type: ["Front End"],
    frameworks: ["Next.js"],
    database: [],
    tools: ["Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Notes Ki Dukaan",
    desc: "A new note sharing app called 'Notes Ki Dukaan' where students can upload their own notes as well as view, rate and download notes from other faculties. Our powerful sorting and searching features will help students in organizing their notes and being prepared for their exams and sessionals.",
    name: "notes-ki-dukaan",
    href: "notes-ki-dukaan.vercel.app",
    github: "notes-ki-dukaan",
    img: nkd,
    carousel: [NKD1, NKD2, NKD3, NKD4, NKD5],
    type: ["Full Stack"],
    frameworks: ["React.js", "Spring Boot"],
    database: ["Mongo DB"],
    tools: ["Tailwind CSS"],
    language: ["JavaScript", "Java"],
  },
  {
    title: "Quiz App",
    desc: "",
    name: "quizzes-app",
    href: "quizzes-app.vercel.app",
    github: "quizzes-app",
    img: quiz,
    type: ["Full Stack"],
    frameworks: ["Next.js", "FastAPI"],
    database: ["PostgreSQL"],
    tools: ["Tailwind CSS", "OpenAI"],
    language: ["JavaScript", "Python"],
  },
];

export default projects;
