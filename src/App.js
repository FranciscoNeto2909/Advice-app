import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchBar from "./components/SearchBar";
import AdvicesContainer from "./components/AdvicesContainer";
import AdviceForm from "./components/AdviceForm"
import Admin from "./components/Admin";
import AdvSuggestedContainer from "./components/AdvSuggestedContainer";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate("/")
  },[])

  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<AdvicesContainer/>}/>
        <Route path="/suggestAdvice" element={<AdviceForm />}/>
        <Route path="/postAdvice" element={<AdvSuggestedContainer/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

