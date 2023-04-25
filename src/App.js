import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import GradientPage from "./components/GradientPage";
import XHRPage from "./components/XHRPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gradient" element={<GradientPage />} />
        <Route path="/xhrBoilerplate" element={<XHRPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
