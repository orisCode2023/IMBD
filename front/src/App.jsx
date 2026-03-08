import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Seats from "./pages/Seats";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/seats" element={<Seats />} />
      </Routes>
    </>
  );
}

export default App;
