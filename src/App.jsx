import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import { Toaster } from "react-hot-toast";

const App = () => {
  const url = "https://foodapp1-backend.onrender.com";
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
