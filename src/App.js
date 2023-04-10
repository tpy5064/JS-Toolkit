import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import GradientPage from "./components/GradientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gradient" element={<GradientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
