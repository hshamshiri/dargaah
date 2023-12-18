import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./screens/main";
import Login from "./screens/login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
