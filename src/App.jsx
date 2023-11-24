import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HrFreelance from "./components/Register/HrFreelance";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path="*" element={<NoPage />} /> */}
      <Route path='dangnhap' element={<Login />} />
      <Route path='dangky' element={<Register />}></Route>
      <Route path='/dangky/hrfreelance' element={<HrFreelance />} />
    </Routes>
  );
}

export default App;
