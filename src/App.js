import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
