import { Route, Routes } from "react-router-dom";
import Counter from "./project/Counter";
import CreditCard from "./project/CreditCard";
import Fav from "./project/Favorite/Fav";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Stopwatch from "./project/Stopwatch";
import TextoverHill from "./project/TextoverHill";
import Link from "./components/Link";
import Vercel from "./project/Vercel/Vercel";
import MusicPlayer from "./project/Music Player/MusicPlayer";
import NestedRadius from "./project/NestedRadius";
import Calculator from "./project/Calculator/Calculator";
import KanbanBoard from "./project/Kanban Board/KanbanBoard";
import PixelPilot from "./project/PixelPilot/PixelPilot";
import Projects from "./project/Projects";

function App() {
  return (
    <>
      <Sidebar />
      <Link />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/creditcard" element={<CreditCard />}></Route>
        <Route path="/fav" element={<Fav />}></Route>
        <Route path="/music-player" element={<MusicPlayer />} />
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
        <Route path="/textoverhill" element={<TextoverHill />}></Route>
        <Route path="/vercel" element={<Vercel />}></Route>
        <Route path="/nested-radius" element={<NestedRadius />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/kanban-board" element={<KanbanBoard />} />
        <Route path="/pixelpilot" element={<PixelPilot />} />
        <Route path="/projects-timeline" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
