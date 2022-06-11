import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import NotFound from "./components/NotFound";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      {/* error route */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Toaster />
    </BrowserRouter>
  );
}

export default App;
