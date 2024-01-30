import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/signup/Signup";
import TryNow from "./pages/TryNow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trynow" element={<TryNow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
