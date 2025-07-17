import Home from "../components/ui/Home";
import Practice from "../components/ui/Practice";
import ResourceDetails from "../components/ui/ResourceDetails";
import Resources from "../components/ui/Resources";
import MainLayout from "../layouts/MainLayout";
import { Contact } from "lucide-react";
import React from "react";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resourceDetails" element={<ResourceDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
