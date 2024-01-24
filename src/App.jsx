import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HrFreelance from "./components/Register/HrFreelance";
import NhaTuyenDung from "./components/Register/NhaTuyenDung";
import UngVien from "./components/Register/UngVien";
import Work from "./components/Work/Work";
import WorkJapan from "./components/Work/WorkJapan";
import WorkVietNam from "./components/Work/WorkVietNam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="*" element={<NoPage />} /> */}
      <Route path="dangnhap" element={<Login />} />
      <Route path="dangky" element={<Register />}></Route>
      <Route path="/dangky/hrfreelance" element={<HrFreelance />} />
      <Route path="/dangky/nhatuyendung" element={<NhaTuyenDung />} />
      <Route path="/dangky/ungvien" element={<UngVien />} />
      <Route path="vieclam" element={<Work />}></Route>
      <Route path="/vieclam/nhatban" element={<WorkJapan />}></Route>
      <Route path="/vieclam/vietnam" element={<WorkVietNam />}></Route>
    </Routes>
  );
}

export default App;
