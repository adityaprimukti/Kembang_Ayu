import { Routes,Route,} from "react-router-dom";
import AfterHome from "./pages/AfterHome";
import FaceService from "./pages/FaceService";
import Reserved from "./pages/Reserved";
import Frame from "./pages/Frame";
import Login from "./pages/Login";
import Register from "./pages/Register";
import KontakPage from "./pages/KontakPage";
import AllService from "./pages/AllService";
import TestimoniForm from "./pages/TestimoniForm";
import BeforeHome from "./pages/BeforeHome";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<BeforeHome />} />
      <Route path="/AfterHome" element={<AfterHome />} />
      <Route path="/faceservice" element={<FaceService />} />
      <Route path="/reserved" element={<Reserved />} />
      <Route path="/Frame" element={<Frame />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/kontakpage" element={<KontakPage />} />
      <Route path="/allservice" element={<AllService />} />
      <Route path="/testimoni" element={<TestimoniForm />} />
    </Routes>
  );
}
export default App;
