import React from "react";
import { Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar";
import AdvicesContainer from "./components/AdvicesContainer";
import AdviceForm from "./components/AdviceForm"
import Admin from "./components/Admin";
export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<AdvicesContainer/>}/>
        <Route path="/suggestAdvice" element={<AdviceForm />}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

