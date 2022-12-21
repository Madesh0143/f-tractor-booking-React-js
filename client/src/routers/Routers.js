import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register"
import AdminHome from "../pages/AdminHome";
import AdminLogin from "../pages/AdminLogin";
import Tractor from "../pages/Tractor";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tractor" element={<CarListing />} />
      <Route path="/tractor/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/adminLogin" element={<AdminLogin />}></Route>
      <Route path="/adminHome" element={<AdminHome/>}></Route>
      <Route path="/tractors" element={<Tractor />}></Route>
    </Routes>
  );
};

export default Routers;
