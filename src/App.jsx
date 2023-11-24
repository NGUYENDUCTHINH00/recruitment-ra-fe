import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path="*" element={<NoPage />} /> */}
      <Route path='dangnhap' element={<Login />} />
    </Routes>
  );
}

export default App;
