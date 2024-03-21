import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Private from "./components/Private";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/private" element={<Private />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
