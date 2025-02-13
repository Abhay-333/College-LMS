import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/ui/LoginPage";
import Home from "./components/ui/Home";
import Resources from "./components/ui/Resources";
import Practice from "./components/ui/Practice";
import Contact from "./components/ui/Contact"; 
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />}>
        <Route path="resources" element={<Resources />} />
        <Route path="practice" element={<Practice />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
