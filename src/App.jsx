import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}></Route>
      {/* <Route path="*" element={<NoPage />} /> */}
      <Route path="dangnhap" element={<Login />} />
    </Routes>
  );
}

export default App;
