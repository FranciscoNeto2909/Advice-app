import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar";
import PostAdvice from "./pages/PostAdvice"
import Admin from "./pages/Admin";
import Alert from "./components/Alert"
import Home from "./pages/Home";
export default function App() {

  const [filteredAdvices, setFilteredAdvices] = useState(null)

  return (
    <div className="App">
      <SearchBar setFilteredAdvices={setFilteredAdvices} />
      <Alert />
      <Routes>
        <Route path="/" element={<Home filteredAdvices={filteredAdvices} />} />
        <Route path="/createAdvice" element={<PostAdvice />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}