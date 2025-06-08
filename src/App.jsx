import { Route, Routes } from "react-router-dom";
import Counter from "./project/Counter";
import CreditCard from "./project/CreditCard";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/creditcard" element={<CreditCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
