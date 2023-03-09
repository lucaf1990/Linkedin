import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Jobs from "./Components/JobsComponent/Jobs";

import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Company from "./Components/JobsComponent/Company";
import Category from "./Components/JobsComponent/Category";
import SearchComponent from "./Components/JobsComponent/SearchComponent";
import LikedPost from "./Components/Likes/LikedPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/:user" element={<Profile />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Likes" element={<LikedPost />} />
          <Route path="/Company/:company" element={<Company />} />
          <Route path="/Category/:category" element={<Category />} />
          <Route path="/Search/:value" element={<SearchComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
