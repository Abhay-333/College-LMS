import { useState } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/ui/LoginPage";
import Home from "./components/ui/Home";
import Resources from "./components/ui/Resources";
import Contact from "./components/ui/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/resoures" element={<Resources />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
