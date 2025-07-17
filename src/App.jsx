import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/ui/LoginPage";
import Home from "./components/ui/Home";
import Resources from "./components/ui/Resources";
import Practice from "./components/ui/Practice";
import Contact from "./components/ui/Contact";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import { Outlet } from "react-router-dom";
import ResourceDetails from "./components/ui/ResourceDetails";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <Navbar />
      <Outlet />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/practice" element={<Practice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resourceDetails" element={<ResourceDetails />} />
      </Routes> */}
      <AppRoutes />
    </>
  );
}

export default App;
